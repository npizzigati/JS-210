// Write a function named incrementProperty that takes two
// arguments: an Object and a String. If the Object contains a
// property with the specified name, the function should
// increment the value of that property. If the property does not
// exist, the function should add a new property with a value of
// 1. The function should return the new value of the property.

// input: object, string
// output: number (integer)

// requirements:
// if property named by string exists, increment it by one (in
// place) and return result of increment
// if property does not exist, create it and set it to one and
// return 1

function incrementProperty(object, string) {
  if (Object.keys(object).includes(string)) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }
  return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1

wins;                               // { steve: 3, susie: 5, lucy: 1 }


