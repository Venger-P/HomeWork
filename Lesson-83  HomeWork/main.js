const user = {
   name: 'Pavel',
   age: 41,
   profession: 'engineer',
   city: 'Novosibirsk',

   sayHi(name) {
      console.log(`Hello ${name}`);
   }
}

console.log(user.city)
user.sayHi('Alex')



const users = [
   {
      name: 'tom',
      age: 23,
      isAdmin: false
   },
   {
      name: 'john',
      age: 30,
      isAdmin: false
   },
   {
      name: 'lusy',
      age: 32,
      isAdmin: true
   },
   {
      name: 'ann',
      age: 27,
      isAdmin: false
   }
]

let x = 0

for (let z = 0; z < users.length; z++) {
   if (users[z].isAdmin === false){
      x++ 
   }
}
console.log(x)
