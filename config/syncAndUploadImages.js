const sequelize = require("./database");
const Image = require("../models/Image");
const Category = require("../models/Category");
const fetchImagesSession = require("../data/api-images.json");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;

const uploadFolder = path.join(__dirname, "../public/uploads");

const loadData = async (forceSync = false) => {
  try {
    await sequelize.sync({ force: forceSync });
    console.log("Database synced.");

    const categoriesFromImages = [
      ...new Set(fetchImagesSession.map((item) => item.category)),
    ];

    const existingCategories = await Category.findAll({
      where: { name: categoriesFromImages },
      attributes: ["name"],
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
        { ignoreDuplicates: true }
      );
      console.log("New categories inserted.");
    }

    const allCategories = await Category.findAll();
    const categoryMap = new Map(
      allCategories.map((category) => [category.name, category.id])
    );

    // Procesar imágenes
    const imageProcessingPromises = fetchImagesSession.flatMap(async (item) => {
      const categoryId = categoryMap.get(item.category) || null;

      return Promise.all(
        item.images.map(async (image) => {
          const uniqueName = `${Date.now()}-${Math.round(
            Math.random() * 1e9
          )}.jpeg`;
          const imagePath = path.join(uploadFolder, uniqueName);
          const originalImagePath = path.join(
            __dirname,
            "../public/",
            image.img
          );

          try {
            await fs.access(originalImagePath);
            await sharp(originalImagePath)
              .resize(800, 800, { fit: "inside" })
              .jpeg({ quality: 80 })
              .toFile(imagePath);

            await Image.create({
              img: uniqueName,
              categoryId: categoryId,
            });

            console.log(`Image ${uniqueName} inserted.`);
          } catch (err) {
            console.error("Error processing image:", err);
          }
        })
      );
    });

    await Promise.all(imageProcessingPromises);
    console.log("All images processed and inserted.");
  } catch (err) {
    console.error("Error syncing database:", err);
  }
};

module.exports = loadData;
