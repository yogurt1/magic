const ap = (fn, ...args) => (...nextArgs) => fn(...args, ...nextArgs)

const add = (...args) => args.reduce((a, b) => a + b, 0)
const test = ap(ap(add, 1, 2), 3, 4)(5)

ap.test = test

module.exports = ap
