// Template Literals
const name = 'Kaka'
const age = 31
const job = 'it consultant'
const city = 'London'
let html

// without template strings (es6)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'<li>City: ' + city + '</li></ul>' 

// with template strings
html = `
<ul>
<li>Name:  ${name} </li>
<li>Age:  ${age} </li>
<li>Job:  ${job} </li>
<li>City:  ${city} </li>
</ul> 
`

function hello(){
  return 'good afternoon'
}
html = `
<ul>
<li>Name:  ${name} </li>
<li>Age:  ${age} </li>
<li>Job:  ${job} </li>
<li>City:  ${city} </li>
<li>City:  ${2 + 2} </li>
<li>City:  ${hello()} </li>
<li>City:  ${age > 30 ? 'over 30' :'Under 30'} </li>
</ul> 
`
// Output
document.body.innerHTML = html