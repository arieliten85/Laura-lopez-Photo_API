const express = require("express");
const router = express.Router();

const imagesRoutes = require("./images.routes");

router.use("/images", imagesRoutes);

module.exports = router;
