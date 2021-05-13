// Write a function named wordCount that takes a single String as
// an argument. The function should return an Object that
// contains the counts of each word that appears in the provided
// String. In the returned Object, you should use the words as
// keys, and the counts as values.

// input: string
// output: object

// requirements:
// output object contains the counts of each word in the string
// (implicit) string contains no punctuation

// approach
// initialize an empty object
// split string on spaces
// for each word in the string, create a new property and set it
// to one if that property doesn't exist, or increment the
// existing property by one

function wordCount(string) {
  const words = string.split(' ');
  console.log(`words === ${words}`);
  const object = {};
  words.forEach(word => {
    if (object[word] === undefined) {
      object[word] = 1;
    } else {
      object[word] += 1;
    }
  });
  return object;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }
