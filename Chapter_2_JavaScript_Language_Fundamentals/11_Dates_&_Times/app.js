// Dates & Times
//not much different to C#
const today = new Date()

let val
val = today.getMonth() // months index start at 0 so November = 10

let birthday = new Date('09-10-1999')
val = birthday

birthday = new Date('11 April 1999')
val = birthday

birthday = new Date('April 11 1999')
val = birthday

birthday = new Date('01/01/2001')
val = birthday

// Output
console.log(today)
console.log(val)