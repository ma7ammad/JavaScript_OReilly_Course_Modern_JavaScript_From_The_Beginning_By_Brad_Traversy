//alert('test alert ddd');
document.querySelector('h1').style.color='red'

//log to console
//log strings
console.log('log console test')

//log numbers (apear in blue)
console.log(123)

// log booleans
console.log(true)

//log variables
var greeting = 'variable greeting'
console.log(greeting)

//log array
console.log([1, 2, 3])

// log objects : could be jason or xml
console.log({a:1, b:2})

// log tables
var table = new Object({a:1, b:2})
console.table(table)
console.table({a:1, b:2})

//Clear Console
console.clear()

/////////
console.error('This is an error')
console.warn('This is a warning')
console.time('timer function')
  console.log('log console test')
  console.log('log console test')
  console.log('log console test')
console.timeEnd('timer function')  
