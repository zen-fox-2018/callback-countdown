const { displayCountdown, error } = require("./views");

const timer = seconds => {
  // Your code here...

  if (seconds > 3599) {
    error()
  } else {
    let interval = setInterval(function(){
      seconds--
      let minutes = Math.floor(seconds / 60);
      let detiks = seconds % 60
      if (detiks < 10) {
        detiks = '0' + detiks
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      displayCountdown(minutes ,detiks)
      if (!seconds) {
        clearInterval(interval)
      }
    }, 1000)
  }
};

module.exports = {
  timer
};
