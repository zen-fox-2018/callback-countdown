const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
    let interval = setInterval(function() {
      if (seconds >0) {
        seconds -= 1;
        displayCountdown(seconds);
      } else {
        clearInterval(interval);
      }
    }, 1000);
};

module.exports = {
  timer
};
