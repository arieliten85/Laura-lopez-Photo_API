const multer = require("multer");
const { ensureUploadFolderExists } = require("../utils/multer/imageProcessor");

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware para manejar la subida y compresión de la imagen
const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image file uploaded" });
  }

  const imageBuffer = req.file.buffer;
  const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}.jpeg`;

  try {
    await ensureUploadFolderExists(); // Asegúrate de que el directorio exista
    req.imageName = await processImage(imageBuffer, uniqueName);
    next();
  } catch (err) {
    res.status(500).json({ message: "Error processing image" });
  }
};

module.exports = { upload, uploadImage };
