// Right Triangles
// Write a function that takes a positive integer, n, as an
// argument and logs a right triangle whose sides each have n
// stars. The hypotenuse of the triangle (the diagonal side in
// the images below) should have one end at the lower-left of the
// triangle, and the other end at the upper-right.

// input: Number (positive integer)
// output: console

// requirements:
// log a right triangle whose sides each have n stars
// orientation should be as shown in the examples

// approach:
// log n lines.
// initialize index to 1
// on each line, log n - index spaces followed by n stars

function triangle(sideLength) {
  for (let i = 1; i <= sideLength; i++) {
    const spaces = ' '.repeat(sideLength - i);
    const stars = '*'.repeat(i);
    console.log(spaces + stars);
  }
}

// Examples:

// Copy Code
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
