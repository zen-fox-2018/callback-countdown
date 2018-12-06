const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let timer = setInterval(() => {
    let minuteStr = '';
    let secondStr = '';
    let minutesC = Math.floor(seconds/60);
    let secondsC = seconds % 60;
    secondsC < 10 ? secondStr = '0' + secondsC : secondStr = secondsC;
    minutesC < 10 ? minuteStr = '0' + minutesC: minuteStr = minutesC;
    displayCountdown(minuteStr + ' : ' + secondStr);
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
    }
  }, 1000)
};

module.exports = {
  timer
};
