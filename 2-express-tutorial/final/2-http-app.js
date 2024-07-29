const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const styleCss = readFileSync("./navbar-app/styles.css");
const indexJs = readFileSync("./navbar-app/browser-app.js");
const logoImage = readFileSync("./navbar-app/logo.svg");

const start = http.createServer((req, res) => {
  //    console.log(req.method)
  //    console.log(req.url);
  const url = req.url;
  console.log(url);
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    //style
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styleCss);
    res.end();
    //browser-app js
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(indexJs);
    res.end();
    //logo
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logoImage);
    res.end();
    //404
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

const port = 3000;
start.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
