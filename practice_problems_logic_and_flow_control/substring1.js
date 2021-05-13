// Substring (1)
// Write a function that returns a substring of a string based on
// a starting index and length.

// Examples
// function substr(string, start, length) {
//   // …
// }

// let string = 'hello world';

// The start argument is the starting index. If negative, treat
// it as strLength + start where strLength is the length of the
// string. For example, if start is -3, treat it as strLength -
// 3.
// The length argument is the maximum length of the desired
// substring. If length exceeds the number of characters
// available, just use the available characters.
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// Copy Code
// let a = 'hello';
// a[0];             // "h"
// a[4];             // "o"

// input: - string
//        - integer (the starting index for substring; if negative,
//        count back from end, where -1 is last index)
//        - integer (the length of the substring; if exceeding
//        remaining characters), use the available characters
// output: string (the substring)
// requirements: (implicit) if length argument is negative, return an empty string
// approach:

// If starting index is negative, find positive starting index
// (add negative number to length)

// Iterate from starting index to starting index + 2nd
// parameter(substring length)

// Record characters at iterated indexes to a new tmp string

// Return new tmp string

function substr(string, startIndex, substringLength) {
  const stringLength = string.length;
  const start = (startIndex >= 0) ? startIndex : stringLength + startIndex;
  const end = start + substringLength;
  let newString = '';
  for (let i = start; i < end && i < stringLength; i++) {
    newString += string[i];
  }
  return newString;
}

console.log(substr('hello world', 2, 4) === "llo ");
console.log(substr('hello world', -3, 2) === "rl");
console.log(substr('hello world', 8, 20) === "rld");
console.log(substr('hello world', 0, -20) === "");
console.log(substr('hello world', 0, 0) === "");
