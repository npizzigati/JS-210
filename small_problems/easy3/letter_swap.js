// Letter Swap
// Given a string of words separated by spaces, write a function
// that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter,
// and that the string will always contain at least one word. You
// may also assume that each string contains nothing but words
// and spaces, and that there are no leading, trailing, or
// repeated spaces.

// Examples:

// input: string
// output: string
// requirements: output string is input string with the first and
// last letters of each word swapped
// string will always contain at least one word
// no repeated spaces, or trailing or leading spaces
// approach:
// initialize a new empty string
// split string into words; iterate through words
// on each word, create a new word with the first and last letters switched
//   - word.slice(-1) + word.slice(1, -1) + word.slice(0, 1)
// concatenate this new word onto the new string
// return new string

function swap(string) {
  const words = string.split(' ');
  const swappedWords = [];
  let swappedWord;
  words.forEach(word => {
    if (word.length === 1) {
      swappedWord = word;
    } else {
      swappedWord = word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    }
    swappedWords.push(swappedWord);
  });
  return swappedWords.join(' ');
}

// using map

function swap(string) {
  const words = string.split(' ');
  const swappedWords = words.map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word.slice(-1) + word.slice(1, -1) + word[0];
    }
  })
  return swappedWords.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
