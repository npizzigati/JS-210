// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between
// 1 and some other number, inclusive, that are multiples of 3 or
// 5. For instance, if the supplied number is 20, the result
// should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater
// than 1.

// input: Number (integer greater than zero)
// output: Number (sum of all numbers divisible by 3 or 5 between
// 1 and the input number)
// requirements: see above
// approach:
// interate from 1 to number
// if number is divisible by 3 or 5, add to running sum
// return running sum

function multisum(max) {
  let sum = 0;
  for (let i = 1; i <= max; i++) {
    if (isDivisibleBy3Or5(i)) {
      sum += i
    }
  }
  return sum;
}

function isDivisibleBy3Or5(number) {
  return (number % 3 === 0 || number % 5 === 0);
}

// Examples:

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168
