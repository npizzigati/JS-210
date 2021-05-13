// Index of Substring
// Write two functions that each take two strings as
// arguments. Their expected behaviors are as follows:

// The indexOf function searches for the first instance of a
// substring in firstString that matches the string secondString,
// and returns the index of the character where that substring
// begins.

// The lastIndexOf function searches for the last instance of a
// substring in firstString that matches the string secondString,
// and returns the index of the character where that substring
// begins.

// Both functions return -1 if firstString does not contain the
// substring specified by secondString.

// Examples
// Copy Code
// function indexOf(firstString, secondString) {
//   // statements
// }

// function lastIndexOf(firstString, secondString) {
//   // statements
// }

// indexOf('Some strings', 's');                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// 'hello'[0];    // "h"
// 'hello'[4];    // "o"

// Create #indexOf()
// - input: two strings: firstString: string to search in;
//   secondString: string to search for
// - output: number: integer index of first occurrence of
//   secondString, or -1 if not found
// Requirements:
// - explicit: May only use [] indexing and length property, and
//   not any other string methods
// - implicit: No input validation
// Approach:
// - iterate through firstString and search for occurrences
//   of first letter of second string
// - for each occurrence, check whether successive string is a
//   match with secondString (#checkMatch)
// - if match, return that substring
// Approach for #checkMatch(str1, str2):
// - str1 is candidate from firstString and str2 is the
//   secondString
// - build str1 as the string starting at the index of the
//   matching letter and continuing for str2.length characters
// Approach for #lastIndexOf
// - Same approach as above, except find candidates from the back
//   to the front of firstString

function lastIndexOf(text, searchString) {
  return indexOf(text, searchString, 'last');
}

function indexOf(text, searchString, position = 'first') {
  const indexCandidateGenerator = generatorMaker(text, searchString, position);
  let indexCandidate = indexCandidateGenerator.next().value;
  while (indexCandidate !== -1) {
    if (isMatch(text, searchString, indexCandidate)) {
      return indexCandidate;
    }
    indexCandidate = indexCandidateGenerator.next().value;
  }
  return -1;
}

function* generatorMaker(text, searchString, position) {
  const firstSearchLetter = searchString[0];
  const textLength = text.length;
  switch (position) {
    case 'first':
      for (let i = 0; i < textLength; i++) {
        if (text[i] === firstSearchLetter) yield i;
      }
      break;
    case 'last':
      for (let i = textLength - 1; i >= 0; i--) {
        if (text[i] === firstSearchLetter) yield i;
      }
      break;
    default:
      break;
  }
  yield -1;
}

function isMatch(text, searchString, indexCandidate) {
  const startIndex = indexCandidate;
  const endIndex = indexCandidate + searchString.length;
  return text.slice(startIndex, endIndex) === searchString;
}
