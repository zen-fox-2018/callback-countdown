const { displayCountdown } = require("./views");

const timer = seconds => {
  let time = seconds
  var setIn = setInterval(function() {
    displayCountdown(time)
    time--
    if(time <= -1 ){
      clearInterval(setIn) 
    }
  }, 300)  
  
};

module.exports = {
  timer
};
