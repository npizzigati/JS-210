// Write a function that takes an array of arrays as an argument,
// and returns a new array that contains the sums of each of the
// sub-arrays.

// Copy Code
// function matrixSums(arr) {
//   // …
// }

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

function matrixSums(arrays) {
  const sumArray = [];
  arrays.forEach(array => sumArray.push(sum(array)));
  return sumArray;
}

function sum(array) {
  return array.reduce((accum, e) => accum + e);
}
