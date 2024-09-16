const imageService = require("../services/images.service");

const createImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    const { categoryId } = req.body;
    const { imageName } = req;

    const newImage = await imageService.createImage(imageName, categoryId);
    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error creating image:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await imageService.getAllImages();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving images" });
  }
};

const getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await imageService.getImageById(id);
    if (!image) return res.status(404).json({ message: "Image not found" });
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving image" });
  }
};

const updateImage = async (req, res) => {
  const { id } = req.params;
  const { categoryId } = req.body;
  try {
    const updatedImage = await imageService.updateImage(id, categoryId);
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await imageService.deleteImage(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllImages,
  getImageById,
  createImage,
  updateImage,
  deleteImage,
};
