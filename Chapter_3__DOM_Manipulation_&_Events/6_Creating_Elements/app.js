// Creating Elements
const li = document.createElement('li')

// add class
li.className = 'collection-item'

//Add attribute
li.setAttribute('title', 'Mo attribute')

// create tesxtNode and append
li.appendChild(document.createTextNode('Mo_Text_Node'))

// create link element
const link = document.createElement('a')

// add class
link.className = 'delete-item secondary-content'

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append link to li
li.appendChild(link)

//append li  as child to ul
document.querySelector('ul.collection').appendChild(li)


// Output
console.log(li)
console.log(link)
