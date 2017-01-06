module.exports = function sum(a = 0) {
    var nextSum = b => typeof b !== 'undefined'
        ? sum(a + b) // If no argment given return 'adder' instance
        : a // Else return result
    
    /* Hidden toString method for sexy casting */
    Object.defineProperty(nextSum, 'toString', {
        enumerable: false,
        value: () => +a
    })
    
    return nextSum
}
