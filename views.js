const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minutes,seconds) => {
  clear();
  console.log(chalk.red(figlet.textSync("Countdown App")));
 
  console.log(chalk.blue(figlet.textSync(`${minutes} : ${seconds}`)));
  
  // Your code here...
};

module.exports = { displayCountdown };
