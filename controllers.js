const { displayCountdown } = require("./views");

let timer = seconds => {
  
  let something = setInterval(function(){
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
    seconds--
  }, 1000)
  console.log(something,'ini something')
};

// console.log(typeof timer)
// timer()

module.exports = {
  timer
};
