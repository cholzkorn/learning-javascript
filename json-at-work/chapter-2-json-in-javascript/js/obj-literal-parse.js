var json = '{' +  // Multi-line JSON string.
  '"firstName": "Larson",' +
  '"lastName": "Richard",' +
  '"email": "larsonrichard@ecratic.com",' +
  '"about": "Incididunt mollit cupidatat magna excepteur do tempor ex non ...",' +
  '"company": "Ecratic",' +
  '"tags": [' +
    '"json",' +
    '"rest",' +
    '"api",' +
    '"oauth"' +
  '],' +
  '"registered": true' +
'}';

// Deserialize JSON string into speaker object
var speaker = JSON.parse(json);

// Print 2nd speaker object.
console.log('speaker.firstName = ' + speaker.firstName)

// JSON.parse() takes a JSON String as input and parses it into a fully functional
// JavaScript Object.
// We’re now able to access the speaker Object’s data members.