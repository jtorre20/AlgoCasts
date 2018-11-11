// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// SOLUTION 1


function palindrome(str) {
  let reversed = str.split('').reverse().join('')
  return reversed === str
}



//SOLUTION 2
// let str ="pennep"
// function palindrome(str) {
//   debugger
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   })
// }

// palindrome(str)
module.exports = palindrome;
