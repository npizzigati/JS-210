// Array Comparison
// The array comparison function that we implemented in the
// Arrays lesson (Alternate link if the previous link doesn't
// work) implicitly assumed that when comparing two arrays, any
// matching values must also have matching index positions. The
// objective of this exercise is to reimplement the function so
// that two arrays containing the same values—but in a different
// order—are considered equal. For example, [1, 2, 3] === [3, 2,
// 1] should return true.

// input: two arrays
// output: boolean
// requirements:
// output is true if the two arrays contain the same elements, regardless of order
// the two arrays must contain the same number of each of the elements
// approach:
// make a copy of first array
// iterate through second array
// at each element, check to see whether element is in first array using indexOf
// if indexOf returns -1, return false
// otherwise, remove the element at the index returned by indexOf (splice)
// if array is not empty at end of iteration return false

function areArraysEqual(array1, array2) {
  const compareCopy = array1.slice();
  for (let i = 0; i < array2.length; i++) {
    const elementCompare = compareCopy.indexOf(array2[i]);
    if (elementCompare === -1) return false;

    compareCopy.splice(elementCompare, 1);
  }
  if (compareCopy.length === 0) return true;

  return false;
}


areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
