const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Testing server");
  res.status(200).send("Welcome");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
