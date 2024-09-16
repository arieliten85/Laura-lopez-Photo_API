// imageProcessor.js
const sharp = require("sharp");
const path = require("path");
const fs = require("fs/promises");

const uploadFolder = path.join(__dirname, "../../public/uploads");

// Asegúrate de que el directorio de uploads exista
const ensureUploadFolderExists = async () => {
  try {
    await fs.access(uploadFolder);
  } catch {
    await fs.mkdir(uploadFolder, { recursive: true });
  }
};

// Procesar y guardar la imagen
const processImage = async (imageBuffer, uniqueName) => {
  const imagePath = path.join(uploadFolder, uniqueName);

  try {
    await sharp(imageBuffer)
      .resize(800, 800, { fit: "inside" })
      .jpeg({ quality: 80 })
      .toFile(imagePath);
    return uniqueName;
  } catch (err) {
    console.error("Error compressing image:", err);
    throw new Error("Error processing image");
  }
};

module.exports = { ensureUploadFolderExists, processImage };
