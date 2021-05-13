// Ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a
// new string that contains the value of the original string with
// all consecutive duplicate characters collapsed into a single
// character.

// Examples:

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// input: String
// output: String
// requirements:
// output string collapses duplicated consecutive characters in
// input string

// approach:
// iterate through string
// if the letter is not equal to the previous letter, add it to a
// new string
// return new string

function crunch(string) {
  let previousCharacter = null;
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === previousCharacter) continue;

    newString += string[i];
    previousCharacter = string[i];
  }
  return newString;
}

// Using regular expressions

function crunch2(string) {
  const regex = /(.)\1+/g;
  return string.replace(regex, '$1');
}
