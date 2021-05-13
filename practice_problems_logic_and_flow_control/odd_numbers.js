// Write a function that takes a positive integer as an argument,
// and logs all the odd numbers from 1 to the passed in number
// (inclusive). All numbers should be logged on separate lines.

// Example
// Copy Code
// logOddNumbers(19);

// // output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// Input: Number (positive integer)
// Output: Logs odd numbers from one to input number
// Requirements:
// Explicit:
// All numbers should be logged on separate lines
// Implicit:
// No input verification
// Function does not need to return anything
// Approach:
// Loop from 1 to input number. Log number if it is odd (number % 2 !== 0).

function logOddNumbers(maxNumber) {
  for (let i = 1; i <= maxNumber; i++) {
    if (i % 2 !== 0) console.log(i);
  }
}

// Alternate implementation:
// Add 2 two i at each iteration

function logOddNumbers2(maxNumber) {
  for (let i = 1; i <= maxNumber; i += 2) {
    console.log(i);
  }
}

logOddNumbers2(19);

