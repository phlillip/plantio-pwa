// // import JohnnyFive

// class JohnnyFive {
//   // where setup happens
//   constructor() {
//     // instantiate JohnnyFive
//     console.log('JohnnyFive is Alive!!!!!!!!')
//     // setup addEventListener
//   }

//   lightOn(){
//     console.log('Light On')
//   }

//   lightOff(){
//     console.log('Light Off')
//   }

//   waterOn(duration){
//     console.log('Water On for ' + duration + 'mins')
//   }
// }

// module.exports = new JohnnyFive()

const { Board, Led } = require('johnny-five');  
// Initialize Johnny-Five board 
const board = new Board();  

// When the board is ready 
board.on('ready', () => {

// Create an LED instance   
const led = new Led(13);    

// Blink the LED every 500ms   
led.blink(500);
});