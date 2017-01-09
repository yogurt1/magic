// Joke :-D

const seq = n => Array.from(Array(n))
const factorial = n => seq(n).reduce((ac, _, i) => ac * n--, 1)
const factorials = seq(171).map((_, i) => factorial(i))

const factorialFast = n => n > 170 ? Infinity : factorials[n]

module.exports = factorialFast
