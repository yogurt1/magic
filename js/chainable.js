const consoleMiddleware = next => data => {
    console.log("Data:", data)
    return next(data)
}

const incrementMiddleware = next => data => {
    const nextData = Object.assign({}, data, {
        n: data.n + 1
    })

    console.log("In increment middleware nextData is:", nextData)

    return next(nextData)
}

const compose = (...fns) => {
    const last = fns.pop()
    const next = f => f
    return fns.reduceRight((g, f) => f(g), last(next))
}

const chain = compose(consoleMiddleware, incrementMiddleware)
chain({n: 24})

module.exports = chain
