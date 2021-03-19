const numbers = [1, 2, 3, 4, 5]
const numbersTo=numbers.map(function(el){
  return el  * 8
})
console.log(numbers,numbersTo)

const students= [
  {name: 'Kaique', score: 6.4},
  {name: 'Isabela', score: 8.6},
  {name: 'Marcelo', score: 9.4},
  {name: 'Sofia', score: 9.1}

]
const getScore =el =>el.score
const result = students
  .map(getScore)
  .map(Math.ceil)

console.log(students, result)