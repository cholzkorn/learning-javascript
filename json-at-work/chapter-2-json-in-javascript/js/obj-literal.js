// creating (instantiating) JavaScript objects
// => we focus on object literal form, because this type of
// object is the one that is closest match to a JSON object

var speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'larsonrichard@ecratic.com',
  about: 'Incididunt mollit cupidatat magna excepteur do tempor ex non ...',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true,
  name: function() {
    return (this.firstName + ' ' + this.lastName);
  }
};

// With Object Literal syntax, you define an Object’s properties (both data and
// functions) inside the curly braces. In the preceding example, the speaker
// Object is instantiated and populated with data. If you never need to create
// another instance of the speaker Object in your application, Object Literal is
// a good approach because it provides a simple yet modular way to group an Object’s
// data and functionality. The real drawback to the Object Literal approach is that
// you can create only one instance of speaker, and you can’t reuse the name()
// method.

// For this example we are using the node.js command prompt from the node.js folder