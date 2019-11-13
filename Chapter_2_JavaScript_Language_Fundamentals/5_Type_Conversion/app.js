// Type Conversion

//Number to String
val = 5
val = String(555)
val = String(5+5)

//Bool to string
val = String(true)

// Date to string
val = String(new Date())

//Arry to String
val = String([1, 2, 3, 4])

//toString
val = (5).toString()
val = (true).toString()


// output
console.log(val)
console.log(typeof val)
console.log(val.length) // length is for strings

console.clear()

// String to Number

val = Number('5')
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('whatsapp')  // output = NaN : Not a Number
val = Number([1,2,3])  // NaN

// Parsing into numbers

val = parseInt('100.30')
val = parseFloat('100.30')

// Addition
let val1 = 5; val2 = 6; 
val = val1 + val2

// output
console.log(val)
console.log(typeof val)
console.log(val.toFixed(2)) // length is for strings

console.clear()

// Addition
val1 = '5'; val2 = 6; 
val = val1 + val2       // val = 56, typeOf: String

let val3 = 5, val4 = '6'
val = val3 + val4       // val = 56, typeOf: String

let val5 = 5, val6 = '6'
val = Number(val3 + val4)       // val = 56, typeOf: String

// output
console.log(val)
console.log(typeof val)
//console.log(val.toFixed(2)) // length is for strings