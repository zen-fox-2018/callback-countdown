const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  //change seconds to MM:DD
  let second = seconds % 60;
  let minutes = (seconds - second) / 60
  let theSecond = 0;
  let theMins = 0;
  if (second < 10) {
    theSecond = `0${second}`
  } else {
    theSecond = second
  }
  if (minutes < 10) {
    theMins = `0${minutes}`
  } else {
    theMins = minutes;
  }
  if (second === 0 && minutes != 0) {
    minutes -= 1
  }
  let time = `${theMins} : ${theSecond}`
  console.log(chalk.cyan(figlet.textSync(time)));
};

module.exports = { displayCountdown };
