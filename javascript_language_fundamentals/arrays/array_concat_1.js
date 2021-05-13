// In this exercise, you will learn more about Arrays by
// implementing your own version of the Array.prototype.concat
// method. Write a function that returns a new array composed of
// all values from the first array argument and the second array
// or value argument. Take note of the following specifications
// when writing your concat function.

// The first argument will always be an array.
// The second argument can be either an array or another value.
// The function should return a new array.
// The elements in the new array should be in the same order as they appear in the arguments.
// The function should copy any object references from the
// arguments into the new array — i.e., if you make a change to a
// reference object from one of the arguments after calling
// concat, those changes should show up in the output array as
// well.
// The function should copy the values of primitives (e.g., strings, numbers, and booleans).
// Examples:

// function concat(array1, secondArgument) {
//   // ...
// }

// input: two arrays, or an array and a non-array value
// output: a single array
// requirements: see above

// approach:
// create a copy of first array 
// determine if second argument is an array.
// if it is, iterate over its elements and push them to the copy of the first array
// if not, push element onto copy of first array.
// return copy

function concat(array, arg) {
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

// concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
// concat([1, 2], 3);                     // [1, 2, 3]
// concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
// concat([2, 3], 'four');                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;                                   // { a: "two", b: 3 }
