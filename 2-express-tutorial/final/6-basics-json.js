const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  res.json(products);
});

app.all("*", (req, res) => {
  res.status(400).send("Page not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
