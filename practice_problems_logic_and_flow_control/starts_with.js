// String StartsWith
// Implement a function that determines whether a string begins
// with another string. If it does, the function should return
// true, or false otherwise.

// Examples
// Copy Code
// function startsWith(string, searchString) {
//   // …
// }

// let str = 'We put comprehension and mastery above all else';
// startsWith(str, 'We');              // true
// startsWith(str, 'We put');          // true
// startsWith(str, '');                // true
// startsWith(str, 'put');             // false

// let longerString = 'We put comprehension and mastery above all
// else!';
// startsWith(str, longerString);      // false
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// Copy Code
// 'hello'[0];    // "h"
// 'hello'[4];    // "o"

// parameters: two strings (the string to check and the search string)
// return: boolean (true if check string starts with search
// string and false otherwise)

// requirements:
// - may only use string indexing and length property
// - if search string is '', function should return true
//   otherwise, return false
// implicit: No need to validate input 

// approach:
// return true if search string is ''
// loop through indices of search string
// check whether indices of string and search string match and
//   return false if they don't.
// return true as default case at end of function

function startsWith(str, searchStr) {
  if (searchStr === '') return true;

  for (let i = 0; i < searchStr.length; i++) {
    if (str[i] !== searchStr[i]) return false;
  }

  return true;
}
