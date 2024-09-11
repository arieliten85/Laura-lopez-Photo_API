const Image = require("../models/Image");
const Category = require("../models/Category");

const getAllImages = (callback) => {
  Image.findAll({
    include: {
      model: Category,
      attributes: ["name"],
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
