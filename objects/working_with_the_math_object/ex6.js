// Math.random returns a random floating-point number between 0
// and 1, excluding the exact value of 1. This isn't helpful on
// its own, since you usually want a random integer between two
// other integer values. Create a function that takes two
// arguments, a minimum and a maximum value, and returns a random
// integer between those numbers (including both of the
// numbers). Your solution should handle the scenario that the
// user inadvertently swaps the positions of the min and max
// values or the scenario that the min and max values are
// equal. You may assume that the user always provides the min
// and max values.

// input: two numbers
// output: number

// requirements: output number should be a random number between two input numbers
// order of two input numbers does not matter
// return one of the two input numbers if the two input numbers are the same

// approach
// return one of the two input numbers if the two input numbers are the same
// find random range by taking absolute value of the difference between input 1 and input 2
// multiply the result of Math.random() by this range
// add the result to the smaller of the two inputs

function random(bound1, bound2) {
  if (bound1 === bound2) return bound1;

  const range = Math.abs(bound1 - bound2);
  const randomDelta = Math.round(Math.random() * range);
  return (bound1 < bound2) ? bound1 + randomDelta : bound2 + randomDelta;
}

