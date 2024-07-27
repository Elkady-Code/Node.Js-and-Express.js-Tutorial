const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe();
    });
    fileStream.on("error", (err) => {
      res.end(err);
      console.log(err);
    });
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
