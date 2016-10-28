const sum = a => function(b) {
    a += b;
    arguments.callee.toString = function() {
        return a
    }
    return arguments.callee;
}

module.exports = sum;
