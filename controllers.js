const { displayCountdown } = require("./views.js");

const timer = seconds => {
  // Your code here...

  var Interval = setInterval(function(){
    var MMDD = ''
    var Min = Math.floor(seconds / 60 )
    var sec = seconds % 60

    if(Min < 10){
      MMDD += '0' + Min
    } 
    else {
      MMDD += Min
    }

    MMDD += ' : '

    if(sec < 10){
      MMDD += '0' + Min
    }
    else {
      MMDD += sec
    }

    if(seconds >=0 ){
      seconds--
      displayCountdown(MMDD)
    } 
    else {
      clearInterval(Interval)
    }
  }, 300)
};



module.exports = {
  timer
};
