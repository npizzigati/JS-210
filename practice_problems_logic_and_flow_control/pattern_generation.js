// Pattern Generation
// Write a function that takes a number of rows as the argument
// nStars and logs a square of numbers and asterisks. For
// example, if nStars is 7, log the following pattern:

// Copy Code
// generatePattern(7);

// // console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// input: number (number of rows)
// output: console (square of numbers and digits according to
// example)
// requirements:
// -on first line, log the number 1 and total_rows - row_number
//  stars
// -on second line, log numbers 1 and 2 and the rest stars etc
//  until reaching the nth line, where n is the number of rows

// Approach:
// -Iterate from 1 to nStars (# of rows, inclusive).
// -On each iteration (i) log the numbers 1 to i followed by '*'
//  times nStars - i
// -To log numbers 1 to i, use function that loops from 1 to i
//  and returns a string of numbers

function generatePattern(nStars) {
  for (let i = 1; i <= nStars; i++) {
    const numberPart = getNumberPart(i);
    const starPart = getStarPart(i, nStars);
    console.log(numberPart + starPart);
  }
}

function getNumberPart(currentNumber) {
  let numberPart = '';
  for (let i = 1; i <= currentNumber; i++) {
    numberPart += i;
  }
  return numberPart;
}

function getStarPart(currentNumber, nStars) {
  const singleStars = currentNumber <= 9 ? 9 - currentNumber : 0;
  const doubleStars = (currentNumber <= 9) ? nStars - 9 : nStars - currentNumber;
  return '*'.repeat(singleStars + (doubleStars * 2));
}
