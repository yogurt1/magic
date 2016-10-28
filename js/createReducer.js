/**
 * Create immutable reducer
 * Every `reducer.case` call will return new reducer with new cases :-)
 *
 * @example:
 * ```
 *  const reducer = createReducer(initialState)
 *  const nextReducer = reducer.case(SOME_TYPE, someHandler)
 *  const nextNextReducer = nextReducer.case(OTHER_TYPE, otherHandler)
 *  const nextState = nextReducer(OTHER_TYPE, someAction)
 *  nextState === initialState // => because nextReducer dont know, how to reduce OTHER_TYPE
 *  const nextNextState = nextNextReducer(OTHER_TYPE, someAction)
 *  nextNextState !== nextState // => New state!
 * ```
 */
module.exports = (initialState, handlers = {}) => Object.setPrototypeOf(
    (state = initialState, action) => (handlers[action.type]||(a => a))(state, action),
    Object.create({
        case(type, handler) {
            handlers[type] = handler
            return this
        }
    })
)

module.exports.better_code = function createReducer(initialState) {
    const handlers = new Map()
    const reducer = (state = initialState, action) => {
        const handler = handlers.get(action.type)
    
        if (!handler) {
            return state
        }

        return handler(state, action)
    }
    
    const api = Object.assign(Object.create(null), {
        case(type, handler) {
            handlers.set(type, handler)
            return reducer
        }
    })

    Object.setPrototypeOf(reducer, api)
    return reducer
}


module.exports.immutable_store_of_handlers = function createReducer(initialState) {
    const handlers = new Immutable.Map()

    const createNextReducer = handlers => (state, action) => {
        const handler = handlers.get(action.type)
        return !handler ? state : handler(state, action)
    }

    const reducer = createNextReducer(handlers)
    const api = {
        case(type, handler) {
            const nextHandlers = handlers.set(type, handler)
            const nextReducer = createNextReducer(nextHandlers)
            Object.setPrototypeOf(nextReducer, api)
            return nextReducer
        }
    }

    Object.setPrototypeOf(reducer, api)
    return nextReducer
}
