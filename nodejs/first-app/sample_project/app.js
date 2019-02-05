// load the built in path module and store it in a constant
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);