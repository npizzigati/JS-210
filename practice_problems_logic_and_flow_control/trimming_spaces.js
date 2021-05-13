// Trimming Spaces
// Write a function that takes a string as an argument, and
// returns the string stripped of spaces from both ends. Do not
// remove or alter internal spaces.

// Example
// trim('  abc  ');  // "abc"
// trim('abc   ');   // "abc"
// trim(' ab c');    // "ab c"
// trim(' a b  c');  // "a b  c"
// trim('      ');   // ""
// trim('');         // ""
// You may use the square brackets ([]) to access a character by
// index (as shown below), and the length property to find the
// string length. However, you may not use any other properties
// or methods from JavaScript's built-in String class.

// input: string (with leading, internal and/or trailing spaces)
// output: string (with leading and trailing spaces removed)
// requirements:
// - may not use String methods. May only use length property and
//   square bracket indexing
// - output must preserve internal spaces

// approach:
// - iterate from front of string until you hit a non-space
//   character, deleting all spaces
// - repeat same process, but this time instead iterating from
//   back of string

function trim(str) {
  let newStringStart = 0;
  let newStringEnd = str.length - 1;
  const hasLeadingSpace = hasLeadingSpaceGenerator(str);
  const hasTrailingSpace = hasTrailingSpaceGenerator(str);
  while (hasLeadingSpace.next().value) {
    newStringStart += 1;
  }
  while (hasTrailingSpace.next().value) {
    newStringEnd -= 1;
  }
  return buildNewString(str, newStringStart, newStringEnd);
}

function* hasLeadingSpaceGenerator(str) {
  for (let i = 0; i < str.length; i++) {
    if ((str[i] === ' ')) {
      yield true;
    } else {
      yield false;
    }
  }
}

function* hasTrailingSpaceGenerator(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if ((str[i] === ' ')) {
      yield true;
    } else {
      yield false;
    }
  }
}

function buildNewString(str, start, end) {
  let newString = '';
  for (let i = start; i <= end; i++) {
    newString += str[i];
  }
  return newString;
}
