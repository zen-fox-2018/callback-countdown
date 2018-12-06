const { displayCountdown } = require("./views");

const timer = seconds => {
  let second = seconds
  let count = setInterval(function() {
    displayCountdown(second)
    second--
    if (second < 0) {
      clearInterval(count)
    }
  }, 1000)
};

module.exports = {
  timer
};
