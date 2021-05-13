// Write a function named objectHasProperty that takes two
// arguments: an Object and a String. The function should return
// true if the Object contains a property with the name given by
// the String, false otherwise.

// Copy Code
let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// input: object, string
// output: boolean
// requirements:
// return true if object has property named by string
// approach:
// if result of retrieving string key on string is undefined,
// return false
// otherwise return true

function objectHasProperty(object, string) {
  if (object[string] === undefined) return false;

  return true;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true
