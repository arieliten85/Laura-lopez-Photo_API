const express = require("express");
const router = express.Router();
const {
  getAllImages,
  getImageById,
  createImage,
  updateImage,
  deleteImage,
} = require("../controllers/images.controller");
const { upload, uploadImage } = require("../middlewares/imageUpload");

// Obtener todas las imágenes
router.get("/", getAllImages);

// Obtener una imagen por ID
router.get("/:id", getImageById);

// Crear una imagen (con subida y compresión)
router.post("/", upload.single("file"), uploadImage, createImage);

// Actualizar una imagen
router.put("/:id", updateImage);

// Eliminar una imagen
router.delete("/:id", deleteImage);

module.exports = router;
