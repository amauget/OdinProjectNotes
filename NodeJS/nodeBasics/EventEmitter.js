//This is the event handler of the back end!

//notice the case, this is a class obj.
const EventEmitter = require('node:events')
const { eventNames } = require('node:process')

const eventEmitter = new EventEmitter()

eventEmitter.on((start, end) =>{
    console.log(`started from ${start} to ${end}`);
})

eventEmitter.emit('start', 1, 100) //triggers the event and passes argument(s) like any function.

//emitters have "add/remove" listener, like front end Vanilla js


eventEmitter.eventNames() //Lists off all events currently registered on the EventEmitter Obj..
