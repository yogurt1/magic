const ops = ['*', '/', '+', '-']

// WARNING: SHITCODE
var calcOf = (getA, getB, cache = true) => Object.setPrototypeOf(ops.reduce((ac, op) => Object.defineProperty(ac, op, cache ?{value:eval(`${getA()}${op}${getB()}`)}:{get: () => eval(`${getA()}${op}${getB()}`)}),{}),null)

module.exports = calcOf
