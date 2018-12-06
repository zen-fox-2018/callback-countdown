const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...  
  let something = setInterval(function(){
    seconds--
    let menit = ~~(seconds/60)
    if(menit <10){
      menit = `0${menit}`
    }
    let detik = seconds % 60
    if (detik < 10){
      detik = `0${detik}`
    }
    if(seconds >= 0){
      displayCountdown(`${menit}:${detik}`)
    }    
    else{
      clearInterval(something)
    }
    

    // cb(seconds)
  }, 100)

  
};

module.exports = {
  timer
};
