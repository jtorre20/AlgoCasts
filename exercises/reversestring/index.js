// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using built in methods(split, reverse, and join)
//****************** */

function reverse(str) {
  // let splitStr = str.split('');
  // let reversed = splitStr.reverse().join('');
  // return reversed;
  return str.split('').reverse().join('')
}

//Using a decrementing for loop
//****************** */
function reverse(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--){
    reversed += str[i]
  }
  return reversed
}

//****************** */
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reverse(str) {

  return str.split('').reduce((rev, char) => char + rev, '');
}


module.exports = reverse;