// Array Concat Part 2
// The concat function from the previous exercise could only
// concatenate a maximum of two arrays. For this exercise, you
// are going to extend that functionality. Refactor the concat
// function to allow for the concatenation of two or more arrays
// or values.

// approach:

function concat(...args) {
  let array = args[0].slice();
  const otherArgs = args.slice(1);
  otherArgs.forEach(arg => {
    array = concat2(array, arg);
  });
  return array;
}

function concat2(array, arg) {
  const newArray = array.slice();
  if (Array.isArray(arg)) {
    joinArray(newArray, arg);
  } else {
    newArray.push(arg);
  }
  return newArray;
}

function joinArray(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
}

// Examples:

// Copy Code
concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]
