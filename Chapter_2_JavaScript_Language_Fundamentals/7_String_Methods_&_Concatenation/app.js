// String Methods & Concatenation
const firstName = 'Mohamed'
const lastName = 'Adam'
const ID = 777

let val
val = firstName + lastName
val = firstName.concat(' ', lastName)
val += ' is an fdm consultant'

val = firstName.length

// Change cases
val = firstName.toUpperCase()
val = 'KLJM'.toLowerCase()

// indexOf()
val = lastName.indexOf('m')
val = lastName.toLowerCase().indexOf('a')
val = lastName.toLowerCase().lastIndexOf('a')

//chartAt()
val = firstName.charAt(2)

// Get last char
val = firstName.charAt(firstName.length-1)

// Slice
val = firstName.slice(0, 4)

// split
const str = 'this is a string'
val = str.split(' ')
val = str.replace('a', '@')
val = str.includes('hi')



// Output
console.log(val)