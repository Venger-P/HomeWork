const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i] + 1)
}


const numbers2 = [13, 24, 31, 42, 57, 66, 78, 81, 94, 99]

for (let x = 0; x < numbers2.length; x++) {
      if ((numbers2[x] % 2) === 0)
   console.log(numbers2[x])
}


const rainbow = ['red', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let y = rainbow.length - 1; y >= 0; y--) {
   console.log(rainbow[y])
}