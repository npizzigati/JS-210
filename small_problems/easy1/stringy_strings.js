// Stringy Strings
// Write a function that takes one argument, a positive integer,
// and returns a string of alternating '1's and '0's, always
// starting with a '1'. The length of the string should match the
// given integer.

// Examples:

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// input: Number (positive integer)
// output: String

// requirements:
// output string consists of input number n digits of alternating
// 1s and 0s, starting with one
//
//
// approach:
// loop n times, adding a 1 or 0 to a temporary variable,
// alternating, each time.
//
// to alternate, change a flag on each loop to indicate whether
// you want a 1 or a 0

function stringy(number) {
  let string = '';
  let turn = '1s';
  for (let i = 0; i < number; i++) {
    string += (turn === '1s') ? '1' : '0';
    turn = (turn === '1s') ? '0s' : '1s';
  } 
  return string;
}


