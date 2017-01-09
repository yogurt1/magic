function asyncSeries(fns, done) {
    return fns.reduceRight((g, f) => f(g), done)
}

module.exports = asyncSeries
const test = module.exports.test = () => {
    const fn1 = (a, done) => {
        setImmediate(() => done(null, a * 2))    
    }
    const fn2 = (a, done) => {
        setImmediate(() => done(null, a + 2))
    }
    asyncSeries([
        done => {
            return fn1(15, done)
        },
        done => {
            return fn2(19, done)
        }
    ], (err, data) => {
        if (err) return console.error("Got error")
        console.log("Got data:", data)
    })
}
