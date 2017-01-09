const factorial = n => Array.from(Array(n)).reduce((ac, _, i) => ac * n--, 1)

module.exports = factorial
