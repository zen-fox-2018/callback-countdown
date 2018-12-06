const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var minuteinView = 0;
  while (seconds > 60) {
    seconds -= 60;
    minuteinView += 1;
  }
  var secondinView = seconds;
  minuteinView = String(minuteinView);
  secondinView = String(secondinView);
  if (minuteinView.length == 1) {
    minuteinView = '0'+minuteinView;
  }
  if (secondinView.length == 1) {
    secondinView = '0'+secondinView;
  }
  console.log(chalk.cyan(figlet.textSync(minuteinView+' : '+secondinView)));
};

module.exports = { displayCountdown };
