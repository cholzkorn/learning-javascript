// an event is a signal that something happened

// capital letters indicate classes
// EventEmitter is a class
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(){
	console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');


// emit means making a noise - signalling