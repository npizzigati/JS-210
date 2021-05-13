// Print Multiples
// Write a function logMultiples that takes one argument
// number. It should log all multiples of the argument between 0
// and 100 (inclusive) that are also odd numbers. Log the values
// in descending order.

// You may assume that number is an integer between 0 and 100.

// Example
// logMultiples(17);
// // output (5x, 3x and 1x)
// 85
// 51
// 17

// logMultiples(21);
// // output (3x and 1x)
// 63
// 21

// input: Number
// output: Logged series of numbers
// requirements:
// explicit: Logged numbers are numbers between 0 and 100 that
// are multiples of the input and odd
// numbers should be logged in descending order
// implicit: No input verification
// approach: iterate through numbers from 100 to 0. If number is
// multiple of input and odd, log to console.

function logMultiples(factor) {
  for (let i = 100; i >= 0; i--) {
    if (isOdd(i) && isMultiple(i, factor)) {
      console.log(i);
    }
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

function isMultiple(num, factor) {
  return num % factor === 0;
}

logMultiples(17);
logMultiples(21);
