// Palindromic Strings Part 2
// Write another function that returns true if the string passed
// as an argument is a palindrome, or false otherwise. This time,
// however, your function should be case-insensitive, and should
// ignore all non-alphanumeric characters. If you wish, you may
// simplify things by calling the isPalindrome function you wrote
// in the previous exercise.

// input: string
// output: boolean
// requirements: return true if input is a palindrome
// case insensitive and only alphanumerical characters matter

// approach:
// downcase the string and remove all non-alphanumeric characters
// to remove non-alphanumerics: 
// use replace and a regex

function isRealPalindrome(string) {
  alphaNumericString = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
  return alphaNumericString === alphaNumericString.split('').reverse().join('');
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
