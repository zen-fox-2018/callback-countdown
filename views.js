const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let sec = seconds%60;
  let minutes = Math.floor(seconds/60);

  if(String(minutes).length < 2 ) {
    minutes = `0${minutes}`
  }
  
  if(String(sec).length < 2){
    sec = `0${sec}`
  }

  console.log(chalk.cyan(figlet.textSync(`${minutes} : ${sec}`)));
};

module.exports = { displayCountdown };
