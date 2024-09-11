const sequelize = require("../config/database");
const Image = require("../models/Image");
const Category = require("../models/Category");
const { fetchImagesSession } = require("../config/data");

sequelize
  .sync({ force: false }) // Cambia a `true` si quieres recrear las tablas
  .then(async () => {
    console.log("Database synced.");

    // Extraer categorías únicas de las imágenes
    const categoriesFromImages = [
      ...new Set(fetchImagesSession.map((item) => item.category)),
    ];

    // Verificar qué categorías ya existen en la base de datos
    const existingCategories = await Category.findAll({
      where: {
        name: categoriesFromImages,
      },
      attributes: ["name"],
    });

    // Filtrar categorías que no están en la base de datos
    const existingCategoryNames = existingCategories.map(
      (category) => category.name
    );
    const newCategories = categoriesFromImages.filter(
      (category) => !existingCategoryNames.includes(category)
    );

    // Insertar nuevas categorías
    if (newCategories.length > 0) {
      await Category.bulkCreate(
        newCategories.map((name) => ({ name })),
        { ignoreDuplicates: true }
      );
      console.log("New categories inserted.");
    }

    // Obtener todas las categorías (nuevas y existentes)
    const allCategories = await Category.findAll();

    // Mapear las imágenes con sus respectivas categorías
    const imagesData = fetchImagesSession.map((item) => {
      const category = allCategories.find((c) => c.name === item.category);
      return {
        img: item.img,
        categoryId: category ? category.id : null,
      };
    });

    // Insertar las imágenes
    await Image.bulkCreate(imagesData);
    console.log("Images inserted.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
