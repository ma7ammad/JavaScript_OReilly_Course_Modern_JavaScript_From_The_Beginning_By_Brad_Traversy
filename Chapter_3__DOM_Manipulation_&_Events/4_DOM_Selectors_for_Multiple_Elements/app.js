// DOM Selectors for  multi-elements
let val

// Manipulate content
// Global search: searches all elements with the defined name on the doc.
const items = document.getElementsByClassName('collection-item')
val = items
//document.querySelector()
items[3].textContent = 'Hello'

// selective selection: ex. by ul
const ulItems = document.querySelector('ul').getElementsByClassName('collection-item')

// Output
console.log(val)
console.log(ulItems)
//console.log(val)