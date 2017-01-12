// Ackermann function
const ack = (n, x, y) => {
    if (n == 0) {
        return y + 1
    }

    if (n == 1) {
        if (y == 0) {
            return x
        }
    }

    if (n == 2) {
        if (y == 0) {
            return 0
        }
    }

    if (n > 2) {
        if (y == 0) {
            return 1
        }
    }

    return ack(n - 1, x, ack(n, x, y - 1))
}

const oldAck = (m ,n) => {
    if (m == 0) {
        return n + 1
    }

    if (m > 0 & n === 0) {
        return oldAck(m - 1, 1)
    }

    if (m > 0 & n > 0) {
        return oldAck(m - 1, oldAck(m, n - 1))
    }
}

module.exports = ack
module.exports.oldAck = oldAck
