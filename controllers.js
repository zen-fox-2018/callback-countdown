const { displayCountdown } = require("./views");

const timer = seconds => {
  let timer = setInterval(() => {
    let result = ''
    let menit = Math.floor(seconds/60)
    let detik = seconds%60
    menit < 10 ? result += '0' + menit: result += menit
    result += ':'
    detik < 10 ? result += '0' + detik: result += detik
    displayCountdown(result)
    seconds--
    if (seconds < 0) {
      clearInterval(timer)
    }
  }, 1000)
};

module.exports = {
  timer
};
