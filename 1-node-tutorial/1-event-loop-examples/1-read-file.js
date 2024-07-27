const { readFile } = require("fs");

console.log("started a first task");
//Check file path
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(error);
    return;
  } else {
    console.log(result);
    console.log("completed first task");
  }
});
console.log("starting the next task");
