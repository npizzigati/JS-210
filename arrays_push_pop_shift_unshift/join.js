// Write a function named join that accepts two arguments: an
// Array and a String. The function should coerce each value in
// the Array to a String, and then join those values together
// using the second argument as a separator. You may assume that
// a separator will always be passed.

// You can call the String function on any JavaScript value to
// get its String representation.

// Copy Code
// join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
// join([1, 2, 3], ' and ');                 // '1 and 2 and 3'

// input: array, string
// output: string

// requirements:
// string output will be each element in the array joined by the
// elements in the input string
// separator will always be passed

// approach:
// initialize a new string variable to ''
// iterate through array passed in
// on each iteration, add the coerced string value of the array
// contents to the string
// if the member is not the final one, also add the separator
// return the string variable

function join(array, separator) {
  let newString = '';
  for (let i = 0; i < array.length - 1; i++) {
    newString = newString + String(array[i]) + separator;
  }
  return newString + String(array[array.length - 1]);
}
