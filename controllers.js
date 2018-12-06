const { displayCountdown } = require("./views");

const timer = seconds => {
  var myTime = setInterval(function(){
    seconds--
    let convertSeconds = null
    let menit = Math.floor(seconds/60)
    let detik = seconds%60
    if(menit < 10 && detik < 10) {
      convertSeconds = '0'+menit+':0'+detik
      displayCountdown(convertSeconds)
    }else if (menit > 10 && detik < 10) {
      convertSeconds = menit+':0'+detik
      displayCountdown(convertSeconds)
    }else if (menit < 10 && detik > 10){
      convertSeconds = '0'+menit+':'+detik
      displayCountdown(convertSeconds)
    }else{
      convertSeconds = menit+':'+detik
      displayCountdown(convertSeconds)
    }
    if(seconds <= 0){
      clearInterval(myTime)
    }
  }, 500) 
};

module.exports = {
  timer
};
