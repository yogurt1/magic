/*
 * Functional Promise
 */

module.exports = function createPromise(cb) {
    let resolved, rejected
    const resolve = something => resolved = something
    cb(resolve, resolved)
    
    const createThen = (nextResolved, nextRejected) => {
        return (onFullfilled, onRejected) => {


            nextResolved = onFullfilled(resolved)
            return createThen(nextResolved, nextRejected)
        }
    }

    try {
        cb(resolve, reject)
        return createThen(resolved, null)
    } catch (err) {
        return createThen(null, rejected)
    }
}
