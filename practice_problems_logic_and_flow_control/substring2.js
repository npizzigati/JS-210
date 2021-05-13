// Substring (2)
// This practice problem is similar to the previous one. This
// time though, both arguments are indices of the provided
// string. The following rules apply:

// If both start and end are positive integers, start is less
// than end, and both are within the boundary of the string,
// return the substring from the start index (inclusive), to the
// end index (NOT inclusive).
// If the value of start is greater than end, swap the values of
// the two, then return the substring as described above.
// If start is equal to end, return an empty string.
// If end is omitted, the end variable inside the function
// isundefined. Return the substring starting at position start
// up through (and including) the end of the string.
// If either start or end is less than 0 or NaN, treat it as 0.
// If either start or end is greater than the length of the
// string, treat it as equal to the string length.
// Examples
// Copy Code
// function substring(string, start, end) {
//   // …
// }

// input: string
//        number (start index)
//        number (end index)
// requirements:
// If start is greater than end, swap the values.

// If start is equal to end, return an empty string

// If end it omitted, return from start to end of string

// If either index is < 0 or Nan, treat it as 0

// If either index is greater than length of the string, treat it
// as equal to the string length

// Approach
// Adjust start and end index values according to above conditions
// Iterate from start to end index, concatenating the characters
// at the iterated index into a new string
// Return the new string

function substring(string, startInput, endInput) {
  const length = string.length;
  let start = normalize(startInput, length);
  let end = (endInput === undefined) ? length : normalize(endInput, length);
  if (start > end) {
    [start, end] = [end, start];
  }

  console.log(`end === ${end}`);
  console.log(`start === ${start}`);
  let newString = '';
  for (let i = start; i < end; i++) {
    newString += string[i];
  }

  return newString;
}

function normalize(index, length) {
  let adjustedIndex = index;
  if (index < 0 || Number.isNaN(parseFloat(index))) {
    adjustedIndex = 0;
  }

  if (index > length) adjustedIndex = length;

  return adjustedIndex;
}


console.log(substring('hello world', 2, 4) === "ll");
console.log(substring('hello world', 4, 2) === "ll");
console.log(substring('hello world', 0, -1) === "");
console.log(substring('hello world', 2) === "llo world");
console.log(substring('hello world', 'a') === "hello world");
console.log(substring('hello world', 8, 20) === "rld");
