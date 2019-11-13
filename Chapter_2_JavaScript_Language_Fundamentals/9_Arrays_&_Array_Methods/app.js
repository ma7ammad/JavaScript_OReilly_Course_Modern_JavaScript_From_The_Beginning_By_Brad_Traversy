// Arrays & Array Methods

const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22,45,33,76,54)
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b:2}, new Date()]

// Check if Array
val = Array.isArray(numbers)

//insert into Array index
numbers[2] = 333

//Mutating Arrays
// Add to end
numbers.push(888)

//Add to front
numbers.unshift(111)

//take off front
val = numbers.shift()

//take off from end 
val = numbers.pop()

val = numbers.concat(numbers2)


//sorting
val = fruit.sort()

val = numbers.sort()   // sort by first number

// to sort numbers desc in an aray use function
val = numbers.sort(function(x, y){
  return x-y;
})

// to sort numbers asc in an aray use function
val = numbers.sort(function(x, y){
  return y-x;
})

//Find 
function under50(num){
  return num < 50
}

val = numbers.find(under50)  // note here dealing with sorted array as per above scripts, not the original one so look at the oiutput of below "console.log(numbers)" and it should return the first value < 50

function over50(num){
  return num > 50
}

val = numbers.find(over50)


// Output
console.log(numbers)
console.log(val)