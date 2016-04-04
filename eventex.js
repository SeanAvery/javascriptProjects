var events = require('events');

// create an event emmitter object
var eventEmitter = new events.EventEmitter();

// create a event handler
var connectHandler = function connected() {
	
	console.log('connection succesfull');

	// send data
	eventEmitter.emit('data_recieved');
}

// bind the connection event with the handler 
eventEmitter.on('connection', connectHandler);

// bind the data_recieved event with the anonymous funciton 
 eventEmitter.on('data_recieved', function() {
 	console.log('data recieved succesfully');
 });

 // fire the connection event
 eventEmitter.emit('connection');

