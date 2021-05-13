// Palindromic Strings Part 1
// Write a function that returns true if the string passed as an
// argument is a palindrome, or false otherwise. A palindrome
// reads the same forwards and backwards. For this problem, the
// case matters and all characters matter.

// input: string
// output: boolean

// requirements:
// output is true if input is a palindrome
// case-sensitive
// all characters matter

// approach
// convert string into array
// reverse a copy of that array
// compare the joined string of the reversed array to that of the
// non-reversed array
// if it is the same, return true, otherwise return false

function isPalindrome(string) {
  const chars = string.split('');
  const reversedChars = chars.slice().reverse();
  return chars.join('') === reversedChars.join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
