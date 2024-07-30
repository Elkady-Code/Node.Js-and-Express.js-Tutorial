const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

app.all("*", (req, res) => {
  res.status(404).send("Sorry page not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
