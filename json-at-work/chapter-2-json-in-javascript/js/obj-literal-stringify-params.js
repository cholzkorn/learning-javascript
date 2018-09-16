var speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'larsonrichard@ecratic.com',
  about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true	
};

function serializeSpeaker(key, value){
	return (typeof value === 'string' || Array.isArray(value)) ? undefined: value;
};

// Pretty Print: call pretty-print with an indentation of level 2
console.log('Speaker (pretty print):\n' + JSON.stringify(speaker, null, 2) + '\n');

// Pretty print and filter out Strings and Arrays
// it uses the serializeSpeaker() function as a replacer (JavaScript functions
// are treated as expressions and can be passed as parameters).

console.log('Speaker without Strings and Arrays:\n' +
	JSON.stringify(speaker, serializeSpeaker, 2));

// JSON.stringify() does one of the following with an undefined value:
	// Omits the value if it’s part of an Object
	// Converts the value to null if that value belongs to an Array