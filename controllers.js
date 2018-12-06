const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function() {
    seconds--
    let menit = ~~(seconds / 60)
    if (menit < 10) {
      menit = `0${menit}`
    } 
    let second = seconds % 60
    if (second < 10) {
      second = `0${second}`
    }
    displayCountdown(`${menit}:${second}`) 
    if (seconds === 0) {
      clearInterval(interval)
    }
  }, 1000);  
};

module.exports = {
  timer
};
