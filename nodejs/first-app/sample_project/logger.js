// We create a module

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { // Logger class now has all the characteristics of EventEmitter
	log(message){ // function keyword no longer needed
		// Send an HTTP request
		console.log(message);

		// Raise an event with event arguments
		// with this we can pass data about the event that
		// has just happened
		this.emit('messageLogged', {id: 1, url: 'http://'});
	}
}



// make the module public

// we are exporting the log function
module.exports = Logger;

// we are exporting the url object
// when exporting, we can give different names,
// such as endPoint. However, exporting is not needed

//module.exports.endPoint = url;