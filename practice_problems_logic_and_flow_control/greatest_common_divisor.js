// Greatest Common Divisor
// Create a function that computes the Greatest Common Divisor of
// two positive integers.

// Example
// Copy Code
// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1

// input: two Numbers
// output: Number

// Requirements
// explicit:
// Input numbers are positive integers
// Output is the greatest common divisor of the input
// implicit:
// No input validation

// Approach:
// Find all divisors of the smaller number
// Iterate through these to find the largest one that also
// divides the larger number
// To find all the divisors of the smaller number:
//   -Pre-populate an array with 1 and that number.
//   -Iterate from 2 to number/2 and record in array if those
//    numbers are factors of the larger number
// Maybe test each divisor of smaller number as it is found (from
// highest to lowest).

// function gcd(num1, num2) {
//   if (num1 === 1 || num2 === 1) return 1;

//   const [smallerNumber, largerNumber] = (num1 < num2) ? [num1, num2] : [num2, num1];
//   const divisorCandidates = getDivisorsOf(smallerNumber);
//   for (let i = 0; i < divisorCandidates.length; i++) {
//     const candidate = divisorCandidates[i];
//     if (isDivisible(largerNumber, candidate)) {
//       return candidate;
//     }
//   }
// }

// function getDivisorsOf(num) {
//   const divisors = [1, num];
//   for (let i = 2; i <= num / 2; i++) {
//     if (isDivisible(num, i)) {
//       divisors.push(i);
//     }
//   }
//   return divisors.sort((a, b) => b - a);
// }

// function isDivisible(num, factor) {
//   return num % factor === 0;
// }

// Attempt without first caculating all factors of smaller number

function gcd(num1, num2) {
  if (num1 === 1 || num2 === 1) return 1;

  const [smallerNumber, largerNumber] = (num1 < num2) ? [num1, num2] : [num2, num1];
  const getNextCandidate = createCandidateSearcher(smallerNumber);
  while (true) {
    const candidate = getNextCandidate();
    if (isDivisible(largerNumber, candidate)) {
      return candidate;
    }
  }
}

function createCandidateSearcher(smallerNumber) {
  let candidate = null;
  let max = Math.floor(smallerNumber / 2);
  function getNextCandidate() {
    if (!candidate) {
      candidate = smallerNumber;
      return candidate;
    }

    for (let i = max; i >= 1; i--) {
      if (isDivisible(smallerNumber, i)) {
        max = i - 1;
        candidate = i;
        break;
      }
    }
    return candidate;
  }
  return getNextCandidate;
}

function isDivisible(num, factor) {
  return num % factor === 0;
}

// accepts and array and returns an array
// #gcd accepts two integers and returns one integer
function multipleGcd(arr) {
  if (arr.length === 2) {
    return [gcd(arr[0], arr[1])];
  } else if (arr.length === 1) {
    return arr;
  } else if (arr.length === 0) {
    return [];
  }
  return multipleGcd(multipleGcd(arr.slice(0, 2)).concat(multipleGcd(arr.slice(2))));
}
