const { displayCountdown } = require("./views");

const timer = seconds => {
  let counter = 0
  let interval = setInterval(function (params) {
    seconds == 1 && clearInterval(interval)
    seconds -= 1
    displayCountdown(seconds)
  },1000)
};

module.exports = {
  timer
};
