// Prime Check
// Write a function that takes a number argument, and returns
// true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

// Example
// Copy Code
// isPrime(1);   // false
// isPrime(2);   // true
// isPrime(3);   // true
// isPrime(43);  // true
// isPrime(55);  // false
// isPrime(0);   // false

// Input: Number;
// Output: Boolean;
// Requirements:
// Explicit: Function returns true if the number is a boolean and
//           false if not.
//           Number will always be a non-negative integer.
// Implicit: No input validation.

// Approach: A prime number's only factors are 1 and that number
// (and it must be greater than 1). Iterate from number/2(floor)
// down to 2. If number is evenly divisible by any i, it is not prime.

function isPrime(num) {
  if (num < 2) return false;

  let result = true 
  for (let i = Math.floor(num / 2); i >= 2; i--) {
    if (num % i === 0) result = false;
  }
  return result;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true 
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
