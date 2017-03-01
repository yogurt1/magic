/*
 * Function curryied
 * ternary :: (a, b) -> Bool c -> a | b
 * @param {any[2]} tuple Tuple. on false and on next
 * @param {Boolean} test Value to test
 * @return {any} one item from tuple
 */
const ternary = tuple => v => tuple[Number(Boolean(v)) > 0 ? 0 : 1]

const test = () => {
    const onTrue = "TRUE"
    const onFalse = "FALSE"
    const tuple = [onTrue, onFalse] 
    console.log(ternary(tuple)(true))
}

test()
