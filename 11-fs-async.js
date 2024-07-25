const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./content/second.txt", "utf8", () => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile("./content/result-async.txt", "Hello World", (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log(result);
        }
      });
    });
  }
});
