// НОД
const gcd = (a, b) => !b ? a : gcd(b, a % b)

// Power, степень
const power = (a, n) => {
    let _ = 1

    while (n) {
        if (n & 1) {
            _ *= a
            a *= a
            n >>= 1
        }
    }

    return _
}

const quickSort = _ => {
    const cmp = (a, b) => a === b ? 0 : (
        a > b ? 1 : -1
    )

    const change = (i, j) => {
        const tmp = _[i]
        _[i] = _[j]
        _[j] = tmp
    }
    
    const qs = (first, last) => {
        let i = first;
        let j = last;
        const x = _[first + last >> 1]

        while (i <= j) {
            while (cmp(_[i], x) == -1) {
                i++
            }

            while (cmp(_[j], x) == 1) {
                j--
            }

            if (i <= j) {
                change(i++, j--)
            }

            if (first < j) {
                qs(first, j)
            }

            if (i < last) {
                qs(i, last)
            }
        }

        return _
    }
    
    return qs(0, _.length - 1)
}

const linkedList = () => {
    let el = 0
    let next = null

    const getElement = () => el
    const setElement = nextEl => el = nextEl
    const getNext = () => next
    const setNext = n => next = n

    return {
        getElement,
        setElement,
        getNext,
        setNext
    }
}
