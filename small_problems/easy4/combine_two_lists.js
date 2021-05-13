// Combine Two Lists
// Write a function that combines two arrays passed as arguments,
// and returns a new array that contains all elements from both
// array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that
// they have the same number of elements.

// Example:

// Copy Code

// using theme: manoj-dark
// input: two arrays
// output: single array
// requirements: output array should alternate elements in input array
// both input arrays are non-empty and have the same number of
// arguments
// approach
// declare a new array and initialize it to []
// iterate through indexes of first array
// at each index, push the element from array1 followed by that
// of array2.

function interleave(array1, array2) {
  const newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
  return newArray;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
