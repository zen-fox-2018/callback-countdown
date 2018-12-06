const { displayCountdown } = require("./views");

const timer = seconds => {
  let timer = setInterval(function() {
    if(seconds === 0) {
      clearInterval(timer)
    } else {
      seconds--;
      displayCountdown(seconds)
    }
  }, 1000)
};

module.exports = {
  timer
};
