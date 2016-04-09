// import the event module 
var events = require('events');

// create an event emitter object
var eventEmitter = new events.EventEmitter();

// bind event to event handler
eventEmitter.on('eventName', eventHandler);

// fire an event
eventEmitter.on('eventName');
