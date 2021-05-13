// Write a function named copyProperties that takes two Objects
// as arguments. The function should copy all properties from the
// first object to the second. The function should return the
// number of properties copied.

// input: 2 objects
// output: number (integer)

// requirements:
// copy all properties of first object to second
// output is number of properties copied
// second argument is provided as an empty object

// approach
// iterate through keys of first object and create them on second
// object, setting their values to their values on the first
// object

function copyProperties(object1, object2) {
  const keys = Object.keys(object1);
  keys.forEach(key => {
    object2[key] = object1[key];
  });

  return keys.length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }
