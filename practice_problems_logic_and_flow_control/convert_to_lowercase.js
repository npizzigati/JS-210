// Converting Strings to Lower Case
// Write a function that returns a string converted to lowercase.

// To convert a single uppercase character to a lowercase
// character, get its ASCII numeric representation from the ASCII
// table, add 32 to that number, then convert the number back to
// a character using the same ASCII table. You can use the
// String.fromCharCode and the String.charCodeAt methods for
// these operations. For example:

// Copy Code
// let string = 'A';
// let asciiNumeric = string.charCodeAt(0);         // 65
// let asciiNumeric += 32;
// string = String.fromCharCode(asciiNumeric); // "a", converted
// to lowercase
// Examples
// Copy Code
// function toLowerCase(string) {
//   // …
// }

// toLowerCase('ALPHABET');    // "alphabet"
// toLowerCase('123');         // "123"
// toLowerCase('abcDEF');      // "abcdef"
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// Copy Code
// 'hello'[0];    // "h"
// 'hello'[4];    // "o"

// parameters: string
// return: lowercased input string
// requirements:
// may only use string indexing and string length property
// no input validation
// (implicit) numbers are preserved unchanged
// (implicit) lowercase characters are preserved lowercase

// approach:
// Determine if input is a number -- return unchanged if it is
//   - Round trip number-string conversion and compare to original
// Iterate through str indexes and convert each letter to lowercase
//   and add to temporary variable
// Return temp variable

function toLowerCase(str) {
  let newString = '';
  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    const code = character.charCodeAt(0);
    if (isUppercaseLetter(code)) {
      newString += downcase(code);
    } else {
      newString += character;
    }
  }
  return newString;
}

function isUppercaseLetter(code) {
  return code >= 65 && code <= 90;
}

function downcase(code) {
  return String.fromCharCode(code + 32);
}
