const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));

  let hrs = Math.floor(seconds / 3600)
  let mins = Math.floor((seconds % 3600) / 60)
  let secs = Math.floor(seconds % 60)

  let result = ''
  if (hrs > 0) {
    result += hrs + ":" + (mins < 10 ? "0" : "")
  }
  
  result += mins + ":" + (secs < 10 ? "0" : "")
  result += secs
  console.log(chalk.cyan(figlet.textSync(result)))
};

module.exports = { displayCountdown };
