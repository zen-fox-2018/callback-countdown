const { timer } = require("./controllers");
const fs = require('fs')

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds);
};

main();
