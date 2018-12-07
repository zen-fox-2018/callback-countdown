const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minutes, seconds) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.yellow(figlet.textSync(`${minutes} : ${seconds}`)));
  // Your code here...
};

const error = () => {
  console.log(chalk.red(figlet.textSync("Your input is more than")));
  console.log(chalk.red(figlet.textSync("1    Hour")));
}

module.exports = { displayCountdown, error };
