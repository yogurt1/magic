module.exports = function adder(a = 0) {
    /* Create function */

    var nextAdder = (b) => (typeof b !== 'undefined')
        ? adder(a + b) // If no argment given return 'adder' instance
        : a // Else return result
    
    /* Hidden toString method for sexy casting */
    Object.defineProperty(nextAdder, 'toString', {
        value: () => +a
    })
    
    return nextAdder
}
