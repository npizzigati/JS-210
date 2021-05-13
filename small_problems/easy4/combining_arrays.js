// Combining Arrays
// Write a function that takes two arrays as arguments and
// returns an array containing the union of the values from the
// two. There should be no duplication of values in the returned
// array, even if there are duplicates in the original
// arrays. You may assume that both arguments will always be
// arrays.

// Example:

// Copy Code
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// input: 2 arrays
// output: 1 array
// requirements:
// output array will contain all the elements of the first two
// arrays, but no duplicates

// approach:
// make a copy of first array
// iterate through second array
// if iterated element is not in first array, push it onto
// the copy of the first array
// return first array

function union(array1, array2) {
  const newArray = array1.slice();
  array2.forEach(e => {
    if (!newArray.includes(e)) newArray.push(e);
  });
  return newArray;
}
