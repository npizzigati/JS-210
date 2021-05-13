// Write a function that takes a floating point number
// representing an angle between 0 and 360 degrees and returns a
// string representing that angle in degrees, minutes, and
// seconds. You should use a degree symbol (˚) to represent
// degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a
// degree, and 60 seconds in a minute.

// Examples:

// Copy Code
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// input: float
// output: string
// output string represents input angle in degrees minutes and
// seconds

// approach:
// degrees will be the integer portion of the float
// minutes will be the integer portion of the (decimal portion of
// the float * 60)
// seconds will be the decimal portion of the non-floored minutes * 60

function dms(angle) {
  angle = normalize(angle);
  const degrees = Math.floor(angle);
  const degreeDecimalPart = angle - degrees;
  const minutes = Math.floor(degreeDecimalPart * 60);
  const minuteDecimalPart = (degreeDecimalPart * 60) - minutes;
  const seconds = Math.floor(minuteDecimalPart * 60);
  return `${degrees}°${pad(minutes)}'${pad(seconds)}`;
}

function pad(number) {
  return String(number).padStart(2, '0');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// Further Exploration
// The current solution implementation only works with positive
// numbers in the range of 0 to 360 (inclusive). Can you refactor
// it so that it works with any positive or negative number?

// Our solution returns the following results for inputs outside
// the range 0-360:

// Copy Code
dms(-1);   // -1°00'00"
dms(400);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00"
// Since degrees are normally restricted to the range 0-360, can
// you modify the code so it returns a value in the appropriate
// range when the input is less than 0 or greater than 360?

// Copy Code
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 60°00'00"

// approach:
// normalize angle before conversion
// to do so: 
// if number is negative and under 360, add 360
// if negative and over 360, take abs value of num % 360
// if number is positive and over 360, take num % 360

function normalize(angle) {
  if (angle < 0) {
    angle += 360;
  }
  return Math.abs(angle % 360);
}
