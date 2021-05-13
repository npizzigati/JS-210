// Multiples of 3 and 5
// Write a function that logs the integers from 1 to 100
// (inclusive) that are multiples of either 3 or 5. If the number
// is divisible by both 3 and 5, append an "!" to the number.

// Example
// ￼Copy Code
// multiplesOfThreeAndFive();

// // output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'

// Input: none
// Output: Strings, each on separate lines
// Requirements:
// Explicit:
// Logs number that are multiples of 3 or 5. If multiple of both,
// the number is appended with a '!'

// Approach:
// Iterate from 1 to 100. Log appropriate output depending on number's factors.

function multiplesOfThreeAndFive() {
  for (let i = 1; i <= 100; i++) {
    let output;

    if (i % 3 === 0 || i % 5 === 0) {
      output = String(i);
    } else {
      continue;
    }

    if (i % 3 === 0 && i % 5 === 0) output += '!';
    console.log(output);
  }
}

multiplesOfThreeAndFive();

