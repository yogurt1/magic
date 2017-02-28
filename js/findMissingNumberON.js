const calcBound = bound => (bound * (bound + 1)) / 2
const sumList = arr => arr.reduce((b, a) => a + b, 0)
const oneLiner = (arr, up, low) =>
    getSumLimit(up) - getSumLimit(low) - sumList(arr)
