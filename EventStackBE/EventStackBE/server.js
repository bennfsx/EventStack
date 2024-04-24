require("dotenv").config();
const express = require("express");
const pool = require("./src/db/db.js");
const { getUsers } = require("./src/controller/userController.js");
const app = express();

const PORT = process.env.PORT || 6001;

//Functions
const getProducts = (req, res) => {
  pool.query("SELECT * FROM products", (error, products) => {
    if (error) {
      throw error;
    }
    res.status(200).json(products.rows);
  });
};

//Here you can add your routes
//Here's an example
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", getProducts);
app.get("/api/getUsers", getUsers);

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}`);
});
