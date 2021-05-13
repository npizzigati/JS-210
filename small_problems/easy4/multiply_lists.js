// Multiply Lists
// Write a function that takes two array arguments, each
// containing a list of numbers, and returns a new array that
// contains the product of each pair of numbers from the
// arguments that have the same index. You may assume that the
// arguments contain the same number of elements.

// input: 2 arrays
// output: array containing the products of the elements at the
// same index of the 2 input arrays
// approach:
// use map (with index argument) to transform the first array,
// multiplying each element by the element at the same index in
// the second array

function multiplyList(array1, array2) {
  return array1.map((element, index) => element * array2[index]);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
