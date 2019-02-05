// an event is a signal that something happened

// capital letters indicate classes
// EventEmitter is a class
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(arg){
	console.log('Listener called', arg);
});

// Raise an event with event arguments
// with this we can pass data about the event that
// has just happened
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)


// emit means making a noise - signalling