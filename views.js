const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.yellow(figlet.textSync("Countdown App" + '\n' + `${seconds[0]}:${seconds[1]}`)));
};

module.exports = { displayCountdown };
