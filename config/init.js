// db/init.js
const connection = require("../config/database");
const { fetchImagesSession } = require("../config/data");

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS images (
    id INT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL
  );
`;

const insertDataQuery = `
  INSERT INTO images (id, img, category) VALUES ?
`;

const data = fetchImagesSession.map((item) => [
  item.id,
  item.img,
  item.category,
]);

connection.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log("Table created or already exists.");

  connection.query(insertDataQuery, [data], (err) => {
    if (err) throw err;
    console.log("Data inserted into the table.");
    connection.end();
  });
});
