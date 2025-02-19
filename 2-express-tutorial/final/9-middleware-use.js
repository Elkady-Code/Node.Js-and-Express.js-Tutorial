const express = require("express");
const app = express();
const logger = require("../logger");
const authorize = require("../authorize");
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.all("*", logger, (req, res) => {
  res.status(404).send("Sorry page is not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`The server is up and running on port ${port}`);
});
