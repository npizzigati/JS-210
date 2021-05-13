// Running Totals
// Write a function that takes an array of numbers and returns an
// array with the same number of elements, but with each
// element's value being the running total from the original
// array.

// Examples:


// input: array
// output: array
// requirements: output array will have running total of input array
// approach: initialize a new empty array
// iterate through array
// at the first element, push the element to the new array
// at each successive element, push the sum of the element and
// the last element of the new array onto the new array

function runningTotal(array) {
  const totals = array.slice(0, 1);
  for (let i = 1; i < array.length; i++) {
    totals.push(array[i] + totals[i - 1]);
  }
  return totals;
}

// using map

function runningTotal2(array) {
  const totals = array.reduce((accum, e, index, array) => {
    if (index === 0) {
      accum.push(e);
    } else {
      accum.push(e + array[index - 1]);
    }
    console.log(`accum === ${accum}`);
    return accum;
  }, []);
  return totals;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
