//What is the output?

var hero = {
  name: 'John Doe',
  getSecretIdentity: function() {
    return this.name
  }
}

let stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity())

//--> undefined

console.log(hero.getSecretIdentity())

//--> John Doe

console.log(stoleSecretIdentity(hero))

//--> John Doe

// We have to bind hero to stolenSecretIdentity
//because we set hero.getSecretIdentity to a 
//new variable