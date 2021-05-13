// XOR
// For boolean values, the || operator returns true if either or
// both of its operands are true, false if both operands are
// false. The && operator, on the other hand, returns true if
// both of its operands are true, and false if either operand is
// false. This works great until you need only one of two
// conditions to be true, the so-called "exclusive or", or XOR.

// Write a function named isXor that takes two arguments, and
// returns true if exactly one argument is truthy, false
// otherwise. Your function should work with the boolean values
// of true and false, but also any JavaScript values based on
// their "truthiness".

// Revisit this lesson for a refresher on how JavaScript does logical operations of || and &&.

// Example
// Copy Code
// isXor(false, true);     // true
// isXor(true, false);     // true
// isXor(false, false);    // false
// isXor(true, true);      // false


// isXor(false, 3);        // true
// isXor('a', undefined);  // true
// isXor(null, '');        // false
// isXor('2', 23);         // false

// input: two arguments of any type
// output: Boolean

// requirements:
// explicit:
// output will be true if argument 1 XOR argument 2 is true, and false otherwise
// arguments may be truthy or falsey

// Approach:
// If arg1 is falsey and arg2 is truthy, or arg1 is truthy and arg2 is falsey, return true.
// Otherwise return false

function xor(arg1, arg2) {
  return ((arg1 && !arg2) || (!arg1 && arg2)) ? true : false 
}

function isXor(arg1, arg2) {
  console.log(xor(arg1, arg2));
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false
isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
