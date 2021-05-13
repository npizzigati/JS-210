// Halvsies
// Write a function that takes an array as an argument and
// returns an array that contains two elements, each of which is
// an array. Put the first half of the original array elements in
// the first element of the return value, and put the second half
// in the second element. If the original array contains an odd
// number of elements, place the middle element in the first half
// array.

// input: single array
// output: 2 arrays
// requirements:
// the first output array is to contain the first half of the
// input array, and the second one is to contain the second half
// of the input array
// if there are an odd number of elements, include the middle one
// in the first half

// approach
// if the array has an odd number of arguments,
// first element of second array is array.length / 2 ceiling
// otherwise, first element of second array is array.length / 2

function halvsies(array) {
  const length = array.length;
  let splitPoint;
  if (length % 2 === 0) {
    splitPoint = length / 2;
  } else {
    splitPoint = Math.ceil(length / 2);
  }
  return [array.slice(0, splitPoint), array.slice(splitPoint)];
}

// Copy Code
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
b = halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
b = halvsies([5]);                // [[5], []]
b = halvsies([]);                 // [[], []]
