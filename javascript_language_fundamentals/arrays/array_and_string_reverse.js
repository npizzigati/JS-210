// Array and String Reverse
// In this exercise, you will implement your own version of the
// Array.prototype.reverse method. Your implementation should
// differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

// input: string or array
// output: new string or array
// requirements: output should be the reversed contents of input
// should not mutate array

// approach
// initialize new empty array
// iterate through string or array and unshift each character
// onto new array
// if input was string, join array elements to return as string
// otherwise, return array

function reverse(collection) {
  const newArray = [];
  for (let i = 0; i < collection.length; i++) {
    newArray.unshift(collection[i]);
  }

  if (Array.isArray(collection)) return newArray;

  return newArray.join('');
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
