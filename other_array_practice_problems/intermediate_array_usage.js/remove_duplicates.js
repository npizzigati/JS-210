// Write a function that takes an array, and returns a new array
// with duplicate elements removed.

// Copy Code
// function uniqueElements(arr) {
//   // …
// }

// Approach:
// Iterate through array
// Initialize temp previous values array to []
// On each iteration, check whether array value at index is contained
// in previous values -- if it is, go on to next value, if it
// isn't, add value to new array and push that value onto previous values 
// return new array

function uniqueElements(array) {
  const newArray = [];
  const previousValues = [];
  array.forEach(value => {
    if (!previousValues.includes(value)) {
      newArray.push(value);
      previousValues.push(value);
    }
  });
  return newArray;
}


uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
