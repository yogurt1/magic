const compose = (...fns) => fns
    .reduceRight((g, f) => f(g), fns.pop())

const applyMiddleware = (...middlewares) => createDispatcher =>
    (reducer, selector, enhancer) => {
        const dispatch = createDispatch(reducer, selector, enhancer)
        const chain = []
        const chain = middlewares
            .map(middleware => middleware(dispatch))

        return compose(...chain)(dispatch)
    }

const createDispatcher = (reducer, selector, enhancer) => {
    if (typeof enhancer === 'function') {
        return enhancer(createDispatch)(reducer, selector)
    }

    const dispatch = (action) => {
        state = reducer(state, action)
    }
}
