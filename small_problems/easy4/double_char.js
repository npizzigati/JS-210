// Double Char Part 1
// Write a function that takes a string, doubles every character
// in the string, and returns the result as a new string.

function repeater(string) {
  return Array.from(string, e => e.repeat(2)).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
