const Image = require("../models/Image");
const Category = require("../models/Category");

const getAllImages = (callback) => {
  Image.findAll({
    include: {
      model: Category, // Incluir el modelo de categoría
      attributes: ["name"], // Solo obtener el nombre de la categoría
    },
  })
    .then((images) => {
      callback(null, images);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  getAllImages,
};
