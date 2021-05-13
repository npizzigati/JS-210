// Code Review: Rot13 Cipher
// After completing this practice problem, post your solution as
// a Code Review in this lesson's forums.

// Rot13 ("rotate by 13 places") is a letter-substitution cipher
// that translates a String into a new String:

// For each character in the original String:

// If the character is a letter in the modern English alphabet,
// change it to the character 13 positions later in the
// alphabet. Thus, a becomes n. If you reach the end of the
// alphabet, return to the beginning. Thus, o becomes b.
// Letter transformations preserve case. A becomes N while a
// becomes n.
// Don't modify characters that are not letters.
// Write a Function, rot13, that takes a String and returns that
// String transformed by the rot13 cipher.

// console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// // logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

// It's worth noting that rot13 applied twice results in the
// original string:

// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// // logs:
// Teachers open the door, but you must enter by yourself.
// This happens since there are 26 characters in the modern
// English alphabet: 2 sets of 13.

// input: string
// output: string (input string rotated 13 characters forward)
// requirements:
// rotation wraps at z back to a
// rotation respects case
// characters that are not letters are not modified

// approach:
// iterate through initial string and add 13 to ascii code to get new ascii code

const ROTATION = 13;
const LOWERCASE_ASCII_START = 97;
const UPPERCASE_ASCII_START = 65;
const LETTERS_IN_ALPHABET = 26;

function rot13(inputString) {
  let newString = '';
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    const newCharCode = rotateCharCode(charCode);
    const newLetter = String.fromCharCode(newCharCode);
    newString += newLetter;
  }

  return newString;
}

function rotateCharCode(charCode) {
  let alphabetPosition;
  let newAlphabetPosition;
  let newCharCode;
  if (representsUppercaseLetter(charCode)) {
    alphabetPosition = charCode - UPPERCASE_ASCII_START;
    newAlphabetPosition = rotateAlphabetPosition(alphabetPosition);
    newCharCode = newAlphabetPosition + UPPERCASE_ASCII_START;
  } else if (representsLowercaseLetter(charCode)) {
    alphabetPosition = charCode - LOWERCASE_ASCII_START;
    newAlphabetPosition = rotateAlphabetPosition(alphabetPosition);
    newCharCode = newAlphabetPosition + LOWERCASE_ASCII_START;
  } else {
    newCharCode = charCode;
  }

  return newCharCode;
}

function representsUppercaseLetter(charCode) {
  return (charCode >= UPPERCASE_ASCII_START
          && charCode < UPPERCASE_ASCII_START + LETTERS_IN_ALPHABET);
}

function representsLowercaseLetter(charCode) {
  return (charCode >= LOWERCASE_ASCII_START
          && charCode < LOWERCASE_ASCII_START + LETTERS_IN_ALPHABET);
}

function rotateAlphabetPosition(alphabetPosition) {
  return (alphabetPosition + ROTATION) % LETTERS_IN_ALPHABET;
}
