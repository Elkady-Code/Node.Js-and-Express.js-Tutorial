const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req -> middleware -> res

// 1. Use vs route
// 2. Options - our own / express / third party

// app.use([logger, authorize]);
// app.use(express.static('./public'))

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.get("/api/items", [logger, authorize], (req, res) => {
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
