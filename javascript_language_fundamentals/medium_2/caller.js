// Caller
// The doubler function in the code below takes two arguments: a
// number to double and return, and a string containing the name
// of the function's caller.

// Copy Code
// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

// Write a makeDoubler function that takes a caller name as an
// argument, and returns a function that has the same behavior as
// doubler, but with a preset caller.

// Example:

// Copy Code
// const doubler = makeDoubler('Victor');
// doubler(5);                             // returns 10
// // logs:
// // This function was called by Victor.

// input: string
// output: function
// requirements: returned function will use caller name provided
// as input to produce output function

function makeDoubler(caller) {
  const doubler = function (number) {
    console.log(`This function was called by ${caller}`);
    return number * 2;
  };
  return doubler;
}
