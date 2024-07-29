const express = require("express");
const path = require("path");
const app = express();

// setup static and static is a built in middleware not having to creating different paths
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//  adding to static assets
//  Server side rendering
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
