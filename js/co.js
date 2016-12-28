// Coroutine
const wrap = module.exports = fn => function() {
    const gen = fn.apply(this, arguments)
    const resolved = res => next(gen.next(res))
    const rejected = err => next(gen.throw(err))

    const next = ({value, done}) => {
        if (done) {
            return Promise.resolve(value)
        }

        try {
            return Promise.resolve(value)
                .then(resolved, rejected)
        } catch (_) {
            throw new Error("Expected Promise/A+")
        }
    }

    try {
        return resolved()
    } catch(err) {
        return Promise.reject(err)
    }
}
