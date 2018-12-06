const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let menit = Math.floor(seconds/60)
  let detik = seconds % 60
  if (menit < 10) {
    menit = "0" + menit
  }
  if (detik < 10) {
    detik = "0"+detik
  }
  console.log(chalk.cyan(figlet.textSync(`${menit}:${detik}`)));

};

module.exports = { displayCountdown };
