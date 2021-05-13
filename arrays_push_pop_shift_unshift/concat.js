// Write a function named concat that accepts two Array
// arguments. The function should return a new Array that
// contains the values from each of the original Arrays.

// You may use functions that were answers to previous practice
// problems to complete this problem, but do not use any built-in
// Array methods.

// Copy Code
// concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

// input: two arrays
// output: single array (concatenated arrays); does not mutate
// original array
// approach:
// create new array by slicing 1st array from beginning to end
// iterate through second array and push each element onto new array

function concat(array1, array2) {
  const newArray = array1.slice(0, array1.length);
  for (let i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  return newArray;
}
