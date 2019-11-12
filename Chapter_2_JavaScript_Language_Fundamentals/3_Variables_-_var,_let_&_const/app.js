// var (old), let, const
var name = 'Jone Doe'
console.log(name)
name = 'Steve Smith'
console.log(name)

//Init var
var greeting
console.log(greeting)
greeting = 'Hello'
console.log(greeting)

// variables can have: letter, numbers, _, $
// Variable names can not start with numbers
//var 1name = 
console.clear()
// Let
console.log('// LET ')
let nameLet = 'Mohamed Adam'
console.log(nameLet)

//console.log("hello".charAt(0).toUpperCase())

// Const
console.log('// Const')
const nameCon = 'Mesud is a good instructor'
console.log('nameCon = ' + nameCon)

// if object is constant it can not be reassigned but its members could :
const person = {
  name: 'coolGuy',
  age: 30
}

console.log(person)
person.name = 'newCoolGuy'
console.log('after assigning person a new name person = ' + person)
console.log(person)
// person = {
//   name: 'coolGuy3',
//   age: 300
// }  // Uncaught TypeError: Assignment to constant variable.

const numbers = [1, 2, 3, 4]
console.log(numbers)

numbers.push(5)  //(4) [1, 2, 3, 4]
console.log(numbers) // (5) [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4]; console.log(numbers) //Uncaught SyntaxError: Identifier 'numbers' has already been declared

//Finished this part
