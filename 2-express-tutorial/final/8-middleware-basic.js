const express = require("express");
const app = express();

// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  next();
  console.log(method, url, time);
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("Sorry page is not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`The server is up and running on port ${port}`);
});
