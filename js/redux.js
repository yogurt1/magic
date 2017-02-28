const createStore = (reducer, initialState) => {
    let state = reducer(initialState, { type: '@@INIT' })
    const listeners = new Set()
    return {
        getState: () => state,
        dispatch: action => {
            state = reducer(state, action)
            listeners.forEach(listener => listener())
            return action
        },
        subscribe: listener => {
            listeners.add(listener)
            return () => listeners.delete(listener)
        }
    }
}
