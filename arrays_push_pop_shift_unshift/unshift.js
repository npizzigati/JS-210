// Write a function named unshift that accepts two arguments: an
// Array and a value. The function should insert the value at the
// beginning of the Array, and return the new length of the
// array. You will need a for loop for this problem.

// Copy Code
// let count = [1, 2, 3];
// unshift(count, 0);      // 4
// count;                  // [ 0, 1, 2, 3 ]

// approach:
// iterate from array.length to 0, inclusive
// at each index, set array[index] to array[index - 1]
// unless index is 0, in which case array[index] should be set to
// the new element

function unshift(array, element) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = element;
  return array.length;
}
