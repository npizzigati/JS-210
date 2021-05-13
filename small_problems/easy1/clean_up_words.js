// Clean Up the Words
// Given a string that consists of some words and an assortment
// of non-alphabetic characters, write a function that returns
// that string with all of the non-alphabetic characters replaced
// by spaces. If one or more non-alphabetic characters occur in a
// row, you should only have one space in the result (i.e., the
// result string should never have consecutive spaces).

// Example:

// Copy Code
// cleanUp("---what's my +*& line?");    // " what s my line "

// input: String
// output: String

// requirements:
// output string should be input string with all non-letter
// characters converted to spaces and all consecutive spaces
// reduced to a single space character

// approach:
// use regex


function cleanUp(string) {
  return string.replace(/[^A-Za-z]+/g, ' ');
}
