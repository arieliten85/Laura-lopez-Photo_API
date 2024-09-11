const sequelize = require("../config/database");
const Image = require("../models/Image");
const Category = require("../models/Category");
const { fetchImagesSession } = require("../config/data");

sequelize
  .sync({ force: false })
  .then(async () => {
    console.log("Database synced.");

    const categoriesFromImages = [
      ...new Set(fetchImagesSession.map((item) => item.category)),
    ];

    const existingCategories = await Category.findAll({
      where: {
        name: categoriesFromImages,
      },
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

    const imagesData = fetchImagesSession.map((item) => {
      const category = allCategories.find((c) => c.name === item.category);
      return {
        img: item.img,
        categoryId: category ? category.id : null,
      };
    });

    await Image.bulkCreate(imagesData);
    console.log("Images inserted.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
