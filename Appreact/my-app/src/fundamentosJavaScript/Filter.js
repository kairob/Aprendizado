const numbers = [1, 2, 3, 4, 5, 6]
const greaterThanZero = el => el > 0
const greaterThanTen = el=> el > 10
const even = el =>  el % 2 === 0
console.log(numbers.filter(el => el > 0))
console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))




const students= [
  {name: 'Kaique', score: 6.4},
  {name: 'Isabela', score: 8.6},
  {name: 'Marcelo', score: 9.4},
  {name: 'Sofia', score: 9.1}

]
const greatStudant = student => student.score >= 9
console.log(students.filter(greatStudant))

