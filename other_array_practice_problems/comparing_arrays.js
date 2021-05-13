// Practice Problem: Comparing Arrays
// In the last assignment, we saw that JavaScript's equality
// operators don't examine the values in the arrays—instead, they
// check that the arrays are the same object. It's more likely
// that you'll want to know whether two arrays contain the same
// values. To do this, you need to write your own function.

// Write a function named arraysEqual that takes two arrays as
// arguments. The function should return true if the arrays
// contain the same values, or false if they do not.

// Test the function with arrays that contain number, string, and
// boolean values. Don't worry about handling arrays that contain
// other Arrays or Objects.

// input: two arrays
// output: boolean
// requirements:
// if the elements of the arrays are identical (shallow
// comparison), return true
// only need to handle number, string and boolean values
// approach:
// iterate through first array
// compare lengths of arrays; if different, return false
// compare element at each index with element at each index
// of the other array
// return false if not
// return true if iteration concludes without returning false

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
}

arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
