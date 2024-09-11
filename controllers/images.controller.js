const imagesService = require("../services/images.service");

// Obtener todas las imágenes
const getImages = (req, res) => {
  imagesService.getAllImages((err, results) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving data" });
      return;
    }
    res.json(results);
  });
};

module.exports = {
  getImages,
};
