const createStream = initialState => {
    if (initialState.get && initialState.set) {

    }

    let state = initialState

    const onChange = handleChange => handleChange(state)
    const get = done => () => done(state)
    const set = done => () => state = done(state)

    return {
        set,
        get,
        onChange
    }
}

const createStreamTest = _ => {

}

const immutableContainer = getter => {
    const set = handleGet => immutableContainer(handleGet)
    const get = handleSet => handleSet(getter())
    
    return {
        get,
        set
    }
}

const immutableContainerTest = _ => {
    const c = immutableContainer(() => 3 + 8)
    const nextC = c.set(() => 5 + 19)
    c.get(v => console.log(v))
    nextC.get(v => console.log(v))
}
