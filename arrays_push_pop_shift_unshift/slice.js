// Write a function named slice that accepts three arguments: an
// return a new Array that contains values from the original
// Array starting with the value at the starting index, and
// including all values up to but not including the end index. Do
// not modify the original Array.

// You may use functions that were answers to previous practice
// problems to complete this problem, but do not use any built-in
// Array methods.

// Copy Code
// slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
// slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

// input: array, number (positive integer), number (positive integer)
// output: new array containing elements from first number to second number

function slice(array, startIndex, endIndex) {
  newArray = [];
  for (let i = startIndex; i < endIndex; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
