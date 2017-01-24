const thunkify = fn => (...args) => done => fn(...args, done)

module.exports = thunkify
