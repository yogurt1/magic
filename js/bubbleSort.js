const bubbleSort = _ => {
    for (let i = _.length - 1; i > 0; i--) {
        let n = 0

        for (let j = 0; j < i; j++) {
            if (_[j] > _[j + 1]) {
                const tmp = _[j]
                _[j] = _[j + 1]
                _[j + 1] = tmp
            }
        }
    }

    return arr
}
