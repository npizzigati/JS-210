// The Math methods that deal with angle measurements all expect
// and return values in radians instead of
// degrees. Mathematically, radians are easier to work with, so
// nearly all languages use radians for circle and arc
// calculations. To read more about radians, check out this
// article. Use the Math.PI property to create a function that
// converts radians to degrees.

// input: number (angle in radians)
// output: number angle in degrees

// approach: 90 degrees = pi/2 radians
// 90 / (pi/2) = 1 radian
// so x radians = 90 / (pi/2) * x degrees

function toDegrees(radians) {
  return radians * (180 / (Math.PI));
}
