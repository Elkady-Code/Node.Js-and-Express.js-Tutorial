const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    //Blocking code!!! asynchronous 
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running up on port 3000");
});
