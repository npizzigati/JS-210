// Letter Counter Part 1
// Write a function that takes a string consisting of one or more
// space separated words and returns an object that shows the
// number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

// input: string
// output: object
// requirements:
// output object should list the sizes (keys) and number of words
// of each size in the input
// punctuation included in letter count
// approach:
// split string on spaces
// initialize count object
// iterate through words. Count letters in each word.
//   - length
// add word size to object if not present
// if present, increase key for size by one
// return object

function wordSizes(string) {
  if (string === '') return {};

  const words = string.split(' ');
  const sizes = {};
  words.forEach(word => {
    const size = word.length;
    if (Object.keys(sizes).includes(String(size))) {
      sizes[size] += 1;
    } else {
      sizes[size] = 1;
    }
  });
  return sizes;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
