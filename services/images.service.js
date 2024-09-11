const connection = require("../config/database");

// Obtener todas las imágenes
const getAllImages = (callback) => {
  connection.query("SELECT * FROM images", (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};

module.exports = {
  getAllImages,
};
