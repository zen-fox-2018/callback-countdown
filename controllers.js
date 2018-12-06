const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = seconds
  let inter = setInterval(() => {
      if (time >= 0) {
        displayCountdown(time)
        time--
      } else if (time < 0){
        clearInterval(inter)
      }
  },500)
  // Your code here...
};

module.exports = {
  timer
};
