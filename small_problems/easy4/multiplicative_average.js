// Write a function that takes an array of integers as input,
// multiplies all of the integers together, divides the result by
// the number of entries in the array, and returns the result as
// a string with the value rounded to three decimal places.

// Examples:


// requirements:
// output is multiplicative average of input array (in string form)
// rounded to 3 decimal places

// approach:
// use reduce to multiply all elements of array
// divide by 2
// round to three decimal places using toFixed
// (will convert to string)
// return

function showMultiplicativeAverage(array) {
  const product = array.reduce((accum, e) => accum * e);
  return (product / array.length).toFixed(3);
}


showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
