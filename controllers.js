const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let timer = setInterval(function(){
    let min = Math.floor(seconds/60)
    let sec = seconds % 60
    let display = ''
    
    if(min < 10) {
      min = `0${min}`
    }
    if(sec < 10) {
      sec = `0${sec}`
    }
    display = `${min} : ${sec}`
    if(seconds === 0){
      clearInterval(timer)
    }
    // console.log(`${min} : ${seconds}`)
    displayCountdown(display)
    seconds-- 
  }, 1000);
};

module.exports = {
  timer
};

