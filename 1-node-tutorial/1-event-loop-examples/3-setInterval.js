setInterval(() => {
  console.log("hello world");
}, 2000);  //it's asynchronous so it's offloaded 
console.log("i will run first");
// process stays alive unless
// unexpected error
