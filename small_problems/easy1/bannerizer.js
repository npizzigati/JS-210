// Bannerizer
// Write a function that will take a short line of text, and
// write it to the console log within a box.

// Examples:

// Copy Code
// logInBox('To boldly go where no one has gone before.');
// will log on the console:

// Copy Code
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// Copy Code
// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
// You may assume that the output will always fit in your browser
// window.

// input: String
// output: to console

// requirements:
// output should be input in a box
// (implicit)
// output box padding: 1 col hor, 1 line vert
// input is only one line (box will always be 5 lines high)

// approach
// intialize variable for first and last line equal to '+' plus
// '-' * string.length + 2 + '+'
// initialize variable for second and fourth line equal to '|' plus
// ' ' * string.length + 2 + '|'
// initialize varible for third line equal to '|' plus
// ' ' + string + ' ' + '|'
// log lines in order

function logInBox(string) {
  const CORNER_BORDER = '+';
  const VERTICAL_BORDER = '+';
  const length = string.length;
  const firstLine = CORNER_BORDER + '-'.repeat(length + 2) + CORNER_BORDER + '\n';
  const secondLine = VERTICAL_BORDER + ' '.repeat(length + 2) + VERTICAL_BORDER + '\n';
  const middleLine = VERTICAL_BORDER + ' ' + string + ' ' + VERTICAL_BORDER + '\n';
  const fourthLine = secondLine;
  const lastLine = firstLine;

  console.log(firstLine + secondLine + middleLine + fourthLine + lastLine);
}
