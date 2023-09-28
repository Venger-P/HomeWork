
hello('Alex')
function hello(name) {
   console.log(`Hello ${name}`)
}



const numbers = [45, 14, 4, 35, 5, 16, 1, 9, 84]
function evenNumbers(numbers) {
   for (let z = 0; z < numbers.length; z++) {
      if (numbers[z] > 10) {
         console.log(numbers[z])
      }
   }
}
evenNumbers(numbers)




function calcNumbers(fistNumber, secondNumber, operator) {
   if (operator === 'plus') {
      return fistNumber + secondNumber
   }
   if (operator === 'minus') {
      return fistNumber - secondNumber
   }
   if (operator === 'multiply') {
      return fistNumber * secondNumber
   }
   if (operator === 'divide') {
      return fistNumber / secondNumber
   }
}
const result = calcNumbers(15, 3, 'divide')
console.log(result)
