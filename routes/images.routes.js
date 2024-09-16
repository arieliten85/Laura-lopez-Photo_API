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

router.get("/", getAllImages);

router.get("/:id", getImageById);

router.post("/", upload.single("file"), uploadImage, createImage);

router.put("/:id", updateImage);

router.delete("/:id", deleteImage);

module.exports = router;
