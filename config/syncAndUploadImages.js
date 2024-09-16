const sequelize = require("./database");
const Image = require("../models/Image");
const Category = require("../models/Category");
const DataLoadStatus = require("../models/DataLoadStatus");
const fetchImagesSession = require("../data/api-images.json");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;

const uploadFolder = path.join(__dirname, "../public/uploads");

const loadData = async () => {
  const transaction = await sequelize.transaction();
  try {
    // Verificar si ya se ha completado la carga de datos
    const loadStatus = await DataLoadStatus.findOne({ transaction });

    if (loadStatus && loadStatus.completed) {
      console.log("Data already loaded. Skipping loading process.");
      await transaction.commit();
      return;
    }

    // Cargar categorías
    const categoriesFromImages = [
      ...new Set(fetchImagesSession.map((item) => item.category)),
    ];
    const existingCategories = await Category.findAll({
      where: { name: categoriesFromImages },
      attributes: ["name"],
      transaction,
    });

    const existingCategoryNames = existingCategories.map(
      (category) => category.name
    );
    const newCategories = categoriesFromImages.filter(
      (category) => !existingCategoryNames.includes(category)
    );

    if (newCategories.length > 0) {
      await Category.bulkCreate(
        newCategories.map((name) => ({ name })),
        { ignoreDuplicates: true, transaction }
      );
      console.log("New categories inserted.");
    }

    const allCategories = await Category.findAll({ transaction });
    const categoryMap = new Map(
      allCategories.map((category) => [category.name, category.id])
    );

    // Procesar imágenes
    for (const item of fetchImagesSession) {
      const categoryId = categoryMap.get(item.category) || null;
      for (const image of item.images) {
        const uniqueName = `${Date.now()}-${Math.round(
          Math.random() * 1e9
        )}.jpeg`;
        const imagePath = path.join(uploadFolder, uniqueName);
        const originalImagePath = path.join(__dirname, "../public/", image.img);

        try {
          await fs.access(originalImagePath);
          await sharp(originalImagePath)
            .resize(800, 800, { fit: "inside" })
            .jpeg({ quality: 80 })
            .toFile(imagePath);

          await Image.create(
            {
              img: uniqueName,
              categoryId: categoryId,
            },
            { transaction }
          );

          console.log(`Image ${uniqueName} inserted.`);
        } catch (err) {
          console.error("Error processing image:", err);
        }
      }
    }

    // Marcar la carga como completada
    if (!loadStatus) {
      await DataLoadStatus.create({ completed: true }, { transaction });
    } else {
      loadStatus.completed = true;
      await loadStatus.save({ transaction });
    }

    await transaction.commit();
    console.log("All images processed and inserted.");
  } catch (err) {
    console.error("Error syncing database:", err);
    await transaction.rollback();
  }
};

module.exports = loadData;
