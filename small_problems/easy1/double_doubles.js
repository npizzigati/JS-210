// Double Doubles
// A double number is an even-length number whose left-side
// digits are exactly the same as its right-side digits. For
// example, 44, 3333, 103103, and 7676 are all double numbers,
// whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an
// argument multiplied by two, unless the argument is a double
// number; otherwise, return the double number as-is.

// input: Number
// output: Number

// requirements:
// output will be input * 2 unless input consists of number
// repeated 2 times

// approach:
// if number is double double, return that number
// to check this:
// convert number to string
// if string length is even and the first half === second half,
// return that number
// if number is not double double, return number * 2

function twice(number) {
  if (doubleNumber(number)) {
    return number;
  }
  return number * 2;
}

function doubleNumber(number) {
  const stringNumber = String(number);
  const length = stringNumber.length;
  return stringNumber.slice(0, length / 2) === stringNumber.slice(length / 2);
}

function isEven(number) {
  return number % 2 === 0;
}

function firstHalfMatchesSecondHalf(stringNumber, length) {
}

// Examples:

// Copy Code
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

