const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let countdown = setInterval(()=>{
    let minute = ~~(seconds/60)
    if(minute < 10){
      minute = 0+String(minute)
    }
    curseconds = seconds % 60 
    if(curseconds < 10){
      curseconds = 0 + String(curseconds)
    }
    console.log(curseconds)
    if(seconds <= 0){
      clearInterval(countdown)
    }
    displayCountdown(minute,curseconds)
    seconds--
  },1000)
  
};

module.exports = {
  timer
};
