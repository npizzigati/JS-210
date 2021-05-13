// Get the Middle Character
// Write a function that takes a non-empty string argument and
// returns the middle character(s) of the string. If the string
// has an odd length, you should return exactly one character. If
// the string has an even length, you should return exactly two
// characters.

// input: string
// output: string
// requirements:
// output string is the middle character(s) of input string
// approach:
// determine if length of string is even or odd
// if odd, return the character at the index:
// Math.floor(length / 2)
// if even, return characters at index length / 2 - 1 and
// length / 2

function centerOf(string) {
  const length = string.length;
  if (length % 2 === 1) {
    const midIndex = Math.floor(length / 2);
    return string[midIndex];
  } else {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return string.slice(midIndex1, midIndex2 + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
