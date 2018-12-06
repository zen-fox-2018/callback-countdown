const { displayCountdown } = require("./views");

const timer = seconds => {          //same with ---> function timer(seconds) {};
  let countdown = setInterval(function () {
    if (seconds == 0) {
      clearInterval(countdown);
    } else {
      seconds -= 1;
      displayCountdown(countDownTimer(seconds));
    }
  }, 1000);
};


function countDownTimer(seconds) {
  var minute = 0;
  var sec = 0;
  for (let i = 0; i < seconds; i++) {
    minute = Math.floor(seconds / 60);
    if (minute < 10) {
      minute = `0${Math.floor(seconds / 60)}`;
    } else if (minute == 0) {
      minute = `00`;
    }

    sec = seconds % 60;
    if (sec < 10) {
      sec = `0${seconds % 60}`;
    } else if (sec == 0) {
      sec = `00`;
    }
  }
  return [minute, sec];
}


module.exports = {
  timer
};
