// Extending EventEmitter

// an event is a signal that something happened

// capital letters indicate classes
// EventEmitter is a class
const EventEmitter = require('events');

// Work with the Logger class and the logger object from logger.js
const Logger = require('./logger.js');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg){
	console.log('Listener called', arg);
});

logger.log('message');