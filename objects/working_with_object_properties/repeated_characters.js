// Practice Problem: Repeated Characters
// Implement a function that takes a String as an argument and
// returns an object that contains a count of the repeated
// characters.

// Note that repeatedCharacters does a bit more than simply count
// the frequency of each character: it determines the counts, but
// only returns counts for characters that have a count of 2 or
// more. It also ignores the case.

// input: string
// output: object with character frequency counts

// requirements:
// only record when letter has count of 2 or greater
// case insensitive

// approach
// downcase input string and split into array
// initialize empty object
// iterate through letters, if letter is an object key, add one to count
// if not, create key and initialize to count of 1
// remove all letter with count of 1

function repeatedCharacters(string) {
  const counts = {};
  const chars = string.toLowerCase().split('');
  chars.forEach(char => {
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  });
  const filteredCounts = removeSingles(counts);
  return filteredCounts;
}

function removeSingles(counts) {
  const filteredCounts = {};
  Object.keys(counts).forEach(key => {
    if (counts[key] > 1) filteredCounts[key] = counts[key];
  });
  return filteredCounts;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }
