const express = require("express");
const router = express.Router();
const imagesController = require("../controllers/images.controller");

// Ruta para obtener todas las imágenes
router.get("/", imagesController.getImages);

module.exports = router;
