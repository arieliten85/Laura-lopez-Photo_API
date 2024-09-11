const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Category = require("./Category");

const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
});

// Establecer la relación: Una categoría tiene muchas imágenes
Category.hasMany(Image, { foreignKey: "categoryId" });
Image.belongsTo(Category, { foreignKey: "categoryId" });

module.exports = Image;
