const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var myInterval = setInterval(function(){
    if (seconds >= 0) {
      displayCountdown(seconds);
      seconds--;
    }
    else {
      clearInterval(myInterval);
    }
  },1000)
};

module.exports = {
  timer
};
