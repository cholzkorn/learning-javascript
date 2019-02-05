var age = 39; // Integer
console.log('age = ' + JSON.stringify(age) + '\n');

var fullName = 'Larson Richard'; // String
console.log('fullName = ' + JSON.stringify(fullName) + '\n');

var tags = ['json', 'rest', 'api', 'oauth']; // Array
console.log('tags = ' + JSON.stringify(tags) + '\n');

var reqistered = true; // Boolean
console.log('registered = ' + JSON.stringify(reqistered) + '\n');

var speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'larsonrichard@ecratic.com',
  about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true
};

console.log('speaker = ' + JSON.stringify(speaker));

// run in console: node basic basic-data-types-stringify.js

// the serialization in this is not very attractive
// we try a better method in obj-literal-stringify-params.js