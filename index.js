const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");
const path = require("path");

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Importar rutas
const indexRoutes = require("./routes/index.js");
const loadData = require("./config/syncAndUploadImages");
const sequelize = require("./config/database.js");

// Usar las rutas
app.use("/api", indexRoutes);

// Rutas statics
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

// Iniciar el servidor
const PORT = process.env.PORT || 8080;

const RESET_DB = true;

const startServer = async () => {
  try {
    await sequelize.sync({ force: RESET_DB });

    // Cargar los datos (imágenes, categorías, etc.)
    await loadData(RESET_DB);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error loading data or syncing database:", error);
  }
};
startServer();
