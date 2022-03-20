const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('plese trun of the moter');
  setTimeout(() => {
    console.log('plese trun of the moter! its a gentle reminder');
  }, 3000);
  
});
console.log("the scrits is till running")
myEmitter.emit('waterfull');
//myEmitter.emit('event');