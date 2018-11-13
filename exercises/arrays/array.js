// --- Directions
// Write a function that adds an element to the beginning of an array.  
// Also write a function that adds an element to the end of an array
// print the array
// --- Examples
//   let array = [1, 2, 3, 4, 5]
//   let n = 6
//
//    array = [6, 1, 2, 3, 4, 5] && array = [1, 2, 3, 4, 5, 6]


//add to the beginning of array

let arr = [1, 2, 3, 4]
let n = 2
function addElement(arr, n){
  arr.unshift(n)
  return arr
}

addElement(arr, n)

// 

let myArray = [1, 2, 3, 4, 5, 6]

myArray = ["start", ...myArray]


// add to the end of array

let arr = [1, 2, 3, 4]
let n = 2

function addArray(arr, n){
  arr.push(n);
  return arr;

}

myArray = [...myArray,"end"]



// myArray = ["start",...myArray,"end"]

