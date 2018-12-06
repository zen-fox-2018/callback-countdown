const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let minute = Math.floor(seconds / 60)
  minute > 10 ?
    minute = `${minute}` :
    minute = `0${minute}`
  seconds = seconds % 60
  seconds > 10 ?
    seconds = `${seconds}` :
    seconds = `0${seconds}`
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${minute}:${seconds}`)));

};

module.exports = { displayCountdown };
