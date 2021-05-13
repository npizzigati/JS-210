// Double Char Part 2
// Write a function that takes a string, doubles every consonant
// character in the string, and returns the result as a new
// string. The function should not double vowels
// ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(string) {
  return Array.from(string, character => {
    let charToAdd;
    if (character.match(/[A-Za-z]/) && character.match(/[^aeiou]/)) {
      charToAdd = character.repeat(2);
    } else {
      charToAdd = character;
    }
    return charToAdd;
  }).join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
