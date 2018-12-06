const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  var jam = Math.floor((seconds / 3600));
  var menit = Math.floor(((seconds % 3600) / 60));
  var detik = Math.floor(seconds % 60);

  if ( jam < 10) {
    jam = "0" + jam
  }
  if ( menit < 10 ) {
    menit = '0' + menit;
  }
  if ( detik < 10) {
    detik = '0' + detik;
  }

// Return display.
  let print =  jam + " : " + menit + ' : ' + detik;

  console.log(chalk.cyan(figlet.textSync(print)));
  // Your code here...
};

module.exports = { displayCountdown };
