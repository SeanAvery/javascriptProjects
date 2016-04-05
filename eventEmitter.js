var events = require('events');

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create two listeners
var listener1 = function listener1() {
	console.log('listener1 executed');
}
var listener2 = function listener2() {
	console.log('listener2 executed');
}

// Bind the connection event with the listen function
eventEmitter.on('connection', listener1);
eventEmitter.on('connection', listener2);

// get the number of event listeners
var numEventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(numEventListeners + " Listeners listening to connection event");
 
// fire the connection event
eventEmitter.emit('connection');

// remove the binding for listener1
eventEmitter.removeListener('connection', listener1);
console.log("removed listener 1");

// fire the connection event
eventEmitter.emit('connection');

// check num of listeners
var numEventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(numEventListeners + " Listeners listening to connection event this time");

// remove all listeners
eventEmitter.removeAllListeners('connection');

eventEmitter.emit('connection');


var numEventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(numEventListeners + " Listeners listening to connection event this time");