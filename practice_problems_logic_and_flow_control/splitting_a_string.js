// Splitting a String
// Write a function that takes two arguments:

// a string to be split
// a delimiter character
// The function logs the split strings to the console, as shown
// below:

// Examples
// Copy Code
// function splitString(string, delimiter) {
//   // …
// }

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // logs:
// // ERROR: No delimiter

// splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

// splitString('hello', ';');
// // logs:
// // hello

// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// Copy Code
// 'hello'[0];    // "h"
// 'hello'[4];    // "o"

// input: two strings (the string to be split and the delimiter character)
// output: logged to console (each substring of the split string
//         on a separate line)
// requirements:
// - logs an error if no delimiter is provided
// - string is split on each character if delimiter is empty string
// - output is original string if delimiter is not found in string
// - may only use indexing and lengh property

// approach:
// - initialize a variable substrings to an empty array
// - iterate through string
// - on each index, if the string char does not match the delimiter char,
//   add letter to a temp substring variable
// - if string char matches delimiter char
// - add substring to the substrings array if substring is not an
//   empty string; if it is an empty string, don't add anything
//   to the substrings array.
// - after looping through array, add any remaining substring to
//   the substrings array

function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  if (delimiter === '') {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
    return;
  }

  const substrings = [];
  let substring = '';
  const length = str.length;
  for (let i = 0; i < length; i++) {
    const char = str[i];
    if (char !== delimiter) {
      substring += char;
      continue;
    }

    if (substring) substrings.push(substring);
    substring = '';
  }

  if (substring) substrings.push(substring);
  outputSubstrings(substrings);
}

function outputSubstrings(substrings) {
  substrings.forEach(substring => console.log(substring));
}
