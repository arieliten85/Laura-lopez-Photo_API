const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors");

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// Importar rutas
const indexRoutes = require("./routes/index.js");

// Usar las rutas
app.use("/api", indexRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
