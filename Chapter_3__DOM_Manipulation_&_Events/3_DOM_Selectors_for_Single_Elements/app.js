let val

//Get element by id
val = document.getElementById('task-title')

//Get things from the element
val = document.getElementById('task-title').id

// Manipulate Styling
document.getElementById('task-title').style.background = '#333'
document.getElementById('task-title').style.color = '#fff'
document.getElementById('task-title').style.padding = '5px'
val = document.getElementById('task-title').style

// Manipulate content
const taskt = document.getElementById('task-title')
taskt.textContent = 'Tasks List'

// document.querySelector()
val = document.querySelector('li')
document.querySelector('li:nth-child(3').style.color = 'purple'


// Output
console.log(val)