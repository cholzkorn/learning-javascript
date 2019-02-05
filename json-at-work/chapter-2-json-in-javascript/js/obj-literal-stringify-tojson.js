var speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'larsonrichard@ecratic.com',
  about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true
};

speaker.toJSON = function () {
	return "Hi there!";
}

console.log('speaker.toJSON(): ' + JSON.stringify(speaker, null, 2));

// If an Object has a toJSON() method, JSON.stringify() outputs the
// value returned by the Object’s toJSON() method rather than
// stringifying the Object. Although the use of toJSON() is legal,
// it’s probably a bad idea. toJSON() defeats the whole purpose of 
// JSON.stringify(), because the developer is now responsible for
// serializing the entire Object structure. This could work with simple
// Objects such as speaker (as currently defined), but you’ll end up
// writing lots of code to serialize more complex Objects that contain
// other Objects.