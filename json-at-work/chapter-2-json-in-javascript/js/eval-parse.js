var x = '{"sessionDate": "2014-10-06T13:30:00.000Z"}';

console.log('Parse with eval(): ' + eval('(' + x + ')').sessionDate + '\n');
console.log('Parse with JSON.parse(): ' + JSON.parse(x).sessionDate);

// In this case, both eval() and JSON.parse() work the same and parse the date
// properly. So what’s the problem? Let’s look at another example with a
// JavaScript statement embedded in the String; see eval-parse-2.js