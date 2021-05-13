// Practice Problem: Welcome Stranger
// Write a function that takes two arguments, an array and an
// object. The array will contain two or more elements that, when
// combined with spaces, produce a person's full name. The object
// will contain two keys, title and occupation, and suitable
// values for both items. Your function should log a greeting to
// the console that uses the person's full name, and mentions the
// person's title and occupation.

// Example:

// Copy Code
// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// // console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

// input: array, object
// output: string output to console

// requirements:
// input array contains 2 or more elements to be combined to form a person's name
// input object will contain properties title and occupation
// output should be a greeting in the form above

// approach
// create first part of greeting:
// create name
// Join arguments in name with a space
// Interpolate this into the string
// create second part of string by interpolating title and occupation

function greetings(name, details) {
  const stringName = buildName(name);
  console.log(`Hello ${stringName}! Nice to have a ${details.title} ${details.occupation} around`);
}

function buildName(name) {
  return name.join(' ');
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
