//How do you create a private variable in JS?

//We have to create a variable that lives inside the local 
//scope of a function

function secretVariable() {
  let private = "super secret code"

  return function(){
    return private
  }
}

let getPrivateVariable = secretVariable()

console.log(getPrivateVariable())