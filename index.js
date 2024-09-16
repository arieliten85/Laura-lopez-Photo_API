const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const indexRoutes = require("./routes/index.js");
const loadData = require("./config/syncAndUploadImages");
const sequelize = require("./config/database.js");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api", indexRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.sync();
    await loadData();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error loading data or syncing database:", error);
  }
};

startServer();
