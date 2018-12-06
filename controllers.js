const { displayCountdown } = require("./views");


const timer = seconds => {
  // Your code here...
  // displayCountdown(seconds)
  let count = setInterval(() => {

    let display = ''
    let min = Math.floor(seconds / 60)
    let sec = seconds % 60

    if (min < 10) {
      display += `0${min}`
    } else {
      display += min
    }

    display += ' : '

    if (sec < 10) {
      display += `0${sec}`
    } else {
      display += sec
    }

    if (seconds >= 0) {
      displayCountdown(display)
      seconds--
    } else {
      clearInterval(count)
    }

  }, 100)
};

module.exports = {
  timer
};
