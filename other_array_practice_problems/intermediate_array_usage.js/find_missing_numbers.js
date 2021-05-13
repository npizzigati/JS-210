// Practice Problems: Find Missing Numbers
// Write a function that takes a sorted array of integers as an
// argument, and returns an array that includes all the missing
// integers (in order) between the first and last elements of the
// argument.

// Examples:

// input: array
// output: array

// requirements:
// output array should contain all the missing integers between
// first and last arguments of input array

// approach:
// initialize a new array to []
// iterate from first element + 1 to last element - 1 of input array
// if index is not in array, add it to new array
// return new array

function missing(array) {
  const newArray = [];
  for (let i = array[0] + 1; i <= array[array.length - 1] - 1; i++) {
    if (array.includes(i)) continue;

    newArray.push(i);
  }
  return newArray;
}

// missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
// missing([1, 2, 3, 4]);                    // []
// missing([1, 5]);                          // [2, 3, 4]
// missing([6]);                             // []
