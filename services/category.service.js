const Category = require("../models/Category");

const getAllCategories = async () => {
  return await Category.findAll();
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

const createCategory = async (name) => {
  return await Category.create({ name });
};

const updateCategory = async (id, name) => {
  const category = await Category.findByPk(id);
  if (category) {
    category.name = name;
    await category.save();
    return category;
  }
  return null;
};

const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (category) {
    await category.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
