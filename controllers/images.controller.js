const Image = require("../models/Image");
const Category = require("../models/Category");
const fs = require("fs").promises;
const path = require("path");

const uploadFolder = path.join(__dirname, "../public/uploads");

const createImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    // Verifica si la categoría existe
    const categoryExists = await Category.findByPk(categoryId);

    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const { imageName } = req;

    if (!imageName) {
      return res.status(500).json({ message: "Image processing error" });
    }

    // Crea una nueva instancia del modelo Image
    const newImage = await Image.create({
      img: imageName,
      categoryId: categoryId,
    });

    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error creating image:", error);
    res.status(500).json({ message: "Error creating image" });
  }
};

const getAllImages = (req, res) => {
  Image.findAll({
    include: { model: Category, attributes: ["name"] },
  })
    .then((images) => res.json(images))
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving images" })
    );
};

const getImageById = (req, res) => {
  const { id } = req.params;
  Image.findByPk(id, {
    include: { model: Category, attributes: ["name"] },
  })
    .then((image) => {
      if (!image) return res.status(404).json({ message: "Image not found" });
      res.json(image);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving image" })
    );
};

const updateImage = (req, res) => {
  const { id } = req.params;
  const { categoryId } = req.body;

  Image.findByPk(id)
    .then((image) => {
      if (!image) return res.status(404).json({ message: "Image not found" });

      image
        .update({ categoryId })
        .then((updatedImage) => res.json(updatedImage))
        .catch((err) =>
          res.status(500).json({ message: "Error updating image" })
        );
    })
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving image" })
    );
};

const deleteImage = (req, res) => {
  const { id } = req.params;

  Image.findByPk(id)
    .then((image) => {
      if (!image) return res.status(404).json({ message: "Image not found" });

      const imagePath = path.join(uploadFolder, image.img);

      fs.unlink(imagePath)
        .then(() => {
          image
            .destroy()
            .then(() => res.json({ message: "Image deleted" }))
            .catch((err) =>
              res.status(500).json({ message: "Error deleting image" })
            );
        })
        .catch((err) => {
          console.error("Error deleting image from filesystem:", err);
          res.status(500).json({ message: "Error deleting image" });
        });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving image" })
    );
};

module.exports = {
  getAllImages,
  getImageById,
  createImage,
  updateImage,
  deleteImage,
};
