// Function Declarations & Expressions
//not much different to C# methods

let val

// Immidiatly Invokable Function Expression IIFEs
(function(){
  console.log('IIFE Ran ..')
})();

(function(name){
  console.log('IIFE parameter name is ' +name)
})('MrHooLaLa');

(function(name){
  console.log(`IIFE parameter name is ${name}`)
})('MrBombastic')

const todo = {
  add: function(){
    console.log('Add todo ..')
  },

  edit: function(id){
    console.log(`Edit todo id = ${id}`)
  }
}
todo.delete = function(){
  console.log('Delete todo ..')
}

todo.add()
todo.edit(33)
todo.delete()
// Output
console.log(val)

