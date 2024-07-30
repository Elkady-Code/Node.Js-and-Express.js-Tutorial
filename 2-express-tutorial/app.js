const express = require("express");
const app = express();
const people = require("./routes/people");
const authRouter = require("./routes/auth");
// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", authRouter);

app.all("*", (req, res) => {
  res.status(404).send("Sorry page not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
