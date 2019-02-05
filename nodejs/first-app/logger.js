// We create a module

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message){
	// Send an HTTP request
	console.log(message);
}

// make the module public

// we are exporting the log function
module.exports = log;

// we are exporting the url object
// when exporting, we can give different names,
// such as endPoint. However, exporting is not needed

//module.exports.endPoint = url;