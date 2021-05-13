// Write a function named splice that accepts three arguments: an
// Array, a start index, and the number of values to remove. The
// function should remove values from the original Array,
// starting with the first index and removing the specified
// number of values. The function should return the removed
// values in a new Array.

// You may use functions that were answers to previous practice
// problems to complete this problem, but do not use any built-in
// Array methods.

// Copy Code
// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
// count;                                 // [ 1, 2, 8 ]

// input: array, number (start index), number (values to remove)
// output: mutate original array / return array of removed values
//
// requirements:
// may not use built-in array methods
// may use functions we've created already in this lesson
// pop, push, shift, unshift
// so, basically, we can use these methods

// approach:
// pop off members of original array, and unshift them onto temp
// array until arriving at start index (inclusive).
// then iterate over removed array for the number of items to
// remove. Finally iterate from that point to the end of the
// removed array, adding the items back on the original array

function splice(array, removeStartIndex, toRemove) {
  const removeEndIndex = removeStartIndex + toRemove;
  let index = array.length - 1;
  const removed = [];
  const temporary = [];

  while (index >= removeEndIndex) {
    // temporary.unshift(array.pop());
    unshift(temporary, pop(array));
    index -= 1;
  }

  while (index >= removeStartIndex) {
    // removed.unshift(array.pop());
    unshift(removed, pop(array));
    index -= 1;
  }

  // temporary.forEach(member => array.push(member));
  temporary.forEach(member => push(array, member));

  return removed;
}

// recreate #pop and #unshift

// #pop approach:
// set array length to one less than it is and return element
// at index of original length - 1

function pop(array) {
  const length = array.length;
  const poppedValue = array[length - 1];
  array.length = length - 1;
  return poppedValue;
}

// #unshift approach:
// iterate from back of array to front
// at each index, shift array values to right
// set first index value to new value provided

function unshift(array, value) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return value;
}

// #push approach
// set array[array.length] equal to input value
function push(array, value) {
  array[array.length] = value;
  return value;
}
