// After Midnight Part 1
// We can use the number of minutes before or after midnight to
// represent the time of day. If the number of minutes is
// positive, the time is after midnight. If the number of minutes
// is negative, the time is before midnight.

// The timeOfDay function shown below takes a time argument using
// this minute-based format, and returns the time of day in
// 24-hour format ("hh:mm"). Reimplement the function using
// JavaScript's Date object.

// Examples:

// input: number
// output: string

// requirements:
// output string is created by adding the input number to the
// time of midnight if it is positive, or subtracting it if it is
// negative
// output string is in 24 hr format
// use Date object

// approach:
// Create date object (automatically set to current date and time)
// determine the number of hours and minutes in input and
// whether to add or subtract input
// set date to positive or negative hours and minutes values
// return the hours and minutes of the date, padding with zeros
// so that both fields are 2 digits

function timeOfDay(delta) {
  const absoluteDelta = Math.abs(delta);
  const hours = Math.floor(absoluteDelta / 60);
  const minutes = absoluteDelta - (hours * 60);
  const date = new Date();
  if (delta < 0) {
    date.setMinutes(-minutes);
    date.setHours(-hours - 1);
  } else {
    date.setMinutes(minutes);
    date.setHours(hours);
  }
  console.log(formattedTime(date));
}

function formattedTime(date) {
  const minutes = padTimeComponent(date.getMinutes());
  const hours = padTimeComponent(date.getHours());
  return `${hours}:${minutes}`;
}

function padTimeComponent(timeComponent) {
  return String(timeComponent).padStart(2, '0');
}



timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"
