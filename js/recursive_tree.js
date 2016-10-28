function getValues(obj) {
    const values = []
    const keys = Object.keys(obj)

    for (let key in keys) {
        values.push(keys[key])
    }

    return values
}

function findMaxElementInTree(tree) {
    let max = 0;

    for (let value of tree) {
        let nextMax = !isNaN(value)
            ? value
            : findMaxElementInTree(value)

        if (nextMax > max) {
            max = nextMax
        }
    }

    return max;
}

const tree = [
    1,
    5,
    [
        6,
        5,
        12521
    ]
]

const max = findMaxElementInTree(tree)
console.log(max);
