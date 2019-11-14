// General Lopps
//not much different to C# methods

let val

//Map
const users = [
  {id: 1, name: 'Adam'},
  {id: 2, name : 'Barbarah'},
  {id: 3, name : 'Charly'}
];

const ids = users.map(function(user, index){
  //console.log(index)
  return (`userIndex = ${index} and id = ${user.id}`)
})

console.log(ids)
console.clear()

// For In Loop

for(let x in users /* x = Key in Users*/){
  console.log(`Key = ${x} and Value = ${users[x].name}`)
}