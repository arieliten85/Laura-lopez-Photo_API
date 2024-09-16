const Image = require("../models/Image");
const Category = require("../models/Category");
const fs = require("fs").promises;
const path = require("path");

const uploadFolder = path.join(__dirname, "../public/uploads");

const createImage = async (imageName, categoryId) => {
  if (!categoryId) {
    throw new Error("Category ID is required");
  }

  // Verifica si la categoría existe
  const category = await Category.findByPk(categoryId);
  if (!category) {
    throw new Error("Category not found");
  }

  if (!imageName) {
    throw new Error("Image processing error");
  }

  // Crea una nueva instancia del modelo Image
  const newImage = await Image.create({
    img: imageName,
    categoryId: categoryId,
  });

  // Incluye el nombre de la categoría en la respuesta
  const imageWithCategory = await Image.findByPk(newImage.id, {
    include: { model: Category, attributes: ["name"] },
  });

  return imageWithCategory;
};

const getAllImages = () => {
  return Image.findAll({
    include: { model: Category, attributes: ["name"] },
  });
};

const getImageById = (id) => {
  return Image.findByPk(id, {
    include: { model: Category, attributes: ["name"] },
  });
};

const updateImage = async (id, categoryId) => {
  const image = await Image.findByPk(id);
  if (!image) {
    throw new Error("Image not found");
  }

  await image.update({ categoryId });

  // Incluye el nombre de la categoría en la respuesta actualizada
  return Image.findByPk(id, {
    include: { model: Category, attributes: ["name"] },
  });
};

const deleteImage = async (id) => {
  const image = await Image.findByPk(id);
  if (!image) {
    throw new Error("Image not found");
  }

  const imagePath = path.join(uploadFolder, image.img);

  await fs.unlink(imagePath);
  await image.destroy();
  return { message: "Image deleted" };
};

module.exports = {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
  deleteImage,
};
