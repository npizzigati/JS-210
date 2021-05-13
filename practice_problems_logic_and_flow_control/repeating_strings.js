// Repeating Strings
// Implement a function that takes a string and a number times as
// arguments. The function should return the string repeated
// times number of times. If times is not a number, return
// undefined. If it is a negative number, return undefined
// also. If times is 0, return an empty string. You may ignore
// the possibility that times is a number that isn't an integer.

// Copy Code
// function repeat(string, times) {
//   // …
// }

// repeat('abc', 1);       // "abc"
// repeat('abc', 2);       // "abcabc"
// repeat('abc', -1);      // undefined
// repeat('abc', 0);       // ""
// repeat('abc', 'a');     // undefined
// repeat('abc', false);   // undefined
// repeat('abc', null);    // undefined
// repeat('abc', '  ');    // undefined
// You may concatenate strings, but you may not use any other
// properties or methods from JavaScript's built-in String class.

// input: string (the string to be repeated)
//        number (integer number of times to repeat the string)
// output: string (the string repeated number times)
// requirements:
// explicit:
// if number is 0, return an empty string
// if number is negative or a non-number, return undefined
// no need to handle non-integer number input
// implicit:
// no spaces or punctuation between repeated characters
// approach:
// - if number is negative or not a number, return nothing
// - loop number times and each time add the string to a temp variable
// - return temp variable

function repeat(str, num) {
  if (typeof num !== 'number' || num < 0) return;

  let repeatedString = '';
  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }

  return repeatedString;
}
