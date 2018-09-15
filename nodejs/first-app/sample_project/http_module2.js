// Loading HTTP module
const http = require('http');

const server = http.createServer(function(req, res){
	if (req.url == '/'){
		res.write('Hello World');
		res.end();
	}

	if (req.url === '/api/courses'){
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
}); //creteServer is an EventEmitter



// Making a server listener and giving it a port
server.listen(3000);

console.log('Listening on port 3000...')