// What Century is That
// Write a function that takes a year as input and returns the
// century. The return value should be a string that begins with
// the century number, and ends with 'st', 'nd', 'rd', or 'th' as
// appropriate for that number.

// New centuries begin in years that end with 01. So, the years
// 1901 - 2000 comprise the 20th century.

// input: Number (integer year, implicitly positive)
// output: String
//
// requirements: output string is the century of input year, with
// the proper ending as explained

// approach:
// Determine the century
// Add the ending as appropriate:
// centuries ending in 1, 2 and 3 are special cases
// To determine the century:
// Subtract 1 from the year, divide by 100, take the floor, add 1
// convert to String

function century(year) {
  centuryCardinal = getCenturyCardinal(year);
  if ([11, 12, 13].includes(centuryCardinal)) return String(centuryCardinal) + 'th';
  return convertToOrdinal(centuryCardinal);
}

function getCenturyCardinal(year) {
  const cardinal = Math.floor((year - 1) / 100) + 1;
  return (cardinal > 1) ? cardinal : 1;
}

function convertToOrdinal(cardinal) {
  const CARDINALS = { 1: 'st', 2: 'nd', 3: 'rd' };
  const centuryString = String(cardinal);
  const endingDigit = centuryString.slice(-1);
  let suffix;
  if (['1', '2', '3'].includes(endingDigit)) {
    suffix = CARDINALS[endingDigit];
  } else {
    suffix = 'th';
  }
  return centuryString + suffix;
}

// Examples:

// Copy Code
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"
