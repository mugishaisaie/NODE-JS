// Events

const EventEmitter = require('events');
const customEventEmitter = new EventEmitter();

customEventEmitter.on("kwiga",()=>{
    console.log("This is event 1");
})


customEventEmitter.emit("kwiga");