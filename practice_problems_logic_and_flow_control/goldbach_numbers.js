// Goldbach Numbers
// Write a function named checkGoldbach that uses Goldbach's
// Conjecture to log every pair of primes that sum to the number
// supplied as an argument. The conjecture states that "you can
// express every even integer greater than 2 as the sum of two
// primes". The function takes as its only parameter, an integer
// expectedSum, and logs all combinations of two prime numbers
// whose sum is expectedSum. Log the prime pairs with the smaller
// number first. If expectedSum is odd or less than 4, your
// function should log null.

// Your checkGoldbach function may call the isPrime function you
// wrote for a previous practice problem.

// Example
// Copy Code
// checkGoldbach(3);
// // logs: null

// checkGoldbach(4);
// // logs: 2 2

// checkGoldbach(12);
// // logs: 5 7

// checkGoldbach(100);
// // logs:
// // 3 97
// // 11 89
// // 17 83
// // 29 71
// // 41 59
// // 47 53

// Input: Number
// Output: Logged to console, no return value

// Requirements:
// -Each line of output is space separated pair of prime numbers
//  adding up to input
// -Input must be even integer greater than 2

// Approach:
// Calculate primes from 2 to number.
// For each possible pair of primes, calculate sum.
// Return those sums equalling number.

// To calculate primes:

// Definition: A number greater than one that is only divisible
// by 1 and itself

// Approach:

// Eliminate even numbers greater than 2, and all multiples of
// primes already found.
// Prepopulate primes list with 2. Iterate from 3 up, step of 2.
// If number is a multiple of a prime already found, continue to
// the next number, otherwise record in primes array.
// Calculate primes up to number - 3

function calculatePrimesUpTo(max) {
  const primes = [2];
  let candidate = 3;
  while (candidate <= max - 3) {
    if (!isPrimeMultiple(candidate, primes)) {
      primes.push(candidate);
    }
    candidate += 2;
  }
  if (primes.length > 1) return primes;
}

function isPrimeMultiple(number, primes) {
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] > number / 2) break;

    if (isMultiple(number, primes[i])) return true;
  }
  return false;
}

function isMultiple(number, factor) {
  return number % factor === 0;
}

function checkGoldbach(number) {
  const primes = calculatePrimesUpTo(number);
  if (!primes) {
    console.log('null');
    return;
  }
  const length = primes.length;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const [num1, num2] = [primes[i], primes[j]];
      if (num1 + num2 === number) console.log(`${num1} ${num2}`);
    }
  }
}
