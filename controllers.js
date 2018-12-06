const { displayCountdown } = require("./views");

const timer = seconds => {
   let timer = setInterval (() =>  {
     let secondsstr = ''
     let minutesStr = ''
     let menit = Math.floor(seconds/60)
     let detik = seconds% 60
     seconds --
    if(seconds < 0){
      clearInterval(timer)
    }
     displayCountdown(menit +':' + detik)
    
   },1000)
}

module.exports = {
  timer
};
