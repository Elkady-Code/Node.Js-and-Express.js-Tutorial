const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received from, ${name} with id of ${id}`);
});
customEmitter.on("response", () => {
  console.log("Something else going on here");
});

customEmitter.emit("response", "john", 34);
