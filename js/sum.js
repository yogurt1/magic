const sum = (a) => {
    const next = (b) => add(a + b)
    Object.defineProperty(next, {
        configurable: false,
        writable: false,
        value: a
    })
    return next
}
module.exports = sum
