// After Midnight Part 2
// As seen in the previous exercise, the time of day can be
// represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is
// after midnight. If the number of minutes is negative, the time
// is before midnight.

// The two functions below do the reverse of the previous
// exercise. They take a 24-hour time argument and return the
// number of minutes before or after midnight, respectively. Both
// functions should return a value between 0 and 1439
// (inclusive). Refactor the functions using the Date object.

// Examples:

// input: string
// output: number
// requirements:
// output number is the number of minutes before or after midnight
// represented by the input string
// use date object

// approach
// afterMidnight:
// convert the input time string into minutes
// output that number
// beforeMidnight
// convert the input time string into minutes
// subract it from the number of minutes in a day and output
// that number

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * 24;

function afterMidnight(timeString) {
  const minutes = convertToMinutes(timeString);
  return minutes;
}

function beforeMidnight(timeString) {
  const minutes = convertToMinutes(timeString);
  return (minutes === 0) ? 0 : MINUTES_PER_DAY - minutes;
}

function convertToMinutes(timeString) {
  const date = new Date(`1-1-2000 ${timeString}`);
  const hours = date.getHours();
  const totalMinutes = hours * MINUTES_PER_HOUR + date.getMinutes();
  return totalMinutes;
}

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686
