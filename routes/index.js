const express = require("express");
const router = express.Router();

const imagesRoutes = require("./images.routes");
const categoryRoutes = require("./category.routes");

router.use("/images", imagesRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
