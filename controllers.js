const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let stopper = setInterval(function () {

    let countMinute = Math.floor(seconds / 60);
    let countSecond = seconds % 60;
    let menit, detik, result;

    countMinute < 10 ? menit = '0' + countMinute : menit = countMinute;
    countSecond < 10 ? detik = '0' + countSecond : detik = countSecond;

    result = `${menit}:${detik}`;

    displayCountdown(result);

    if (seconds > 0) {
      seconds--
    } else {
      clearInterval(stopper)
    }

  }, 1000);
};

module.exports = {
  timer
};
