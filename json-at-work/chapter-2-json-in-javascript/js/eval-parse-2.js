var x = '{ "sessionDate": new Date() }';

console.log('Parse with eval(): ' + eval('('+ x + ')').sessionDate + '\n');

console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);

// We passed in text that contains a JavaScript statement, new Date(),
// and eval() executes that statement. Meanwhile, JSON.parse() correctly
// rejects the text as invalid JSON. Although we passed in only a fairly
// innocuous statement to create a Date, someone else could pass in malicious
// code and eval() would still execute it. Even though eval() can be used to
// parse JSON, it is considered a bad/unsafe practice because it opens the
// door to any valid JavaScript expression, leaving your application
// vulnerable to attacks. Because of this security issue, the eval() function
// has been deprecated (for parsing JSON) in favor of JSON.parse().