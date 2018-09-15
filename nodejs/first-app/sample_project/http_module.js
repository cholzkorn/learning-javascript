// Loading HTTP module
const http = require('http');

const server = http.createServer(); //creteServer is an EventEmitter

// Listener
server.on('connection', (socket) => { // arrow function syntax
	console.log('New connection...');
});

// Making a server listener and giving it a port
server.listen(3000);

console.log('Listening on port 3000...')