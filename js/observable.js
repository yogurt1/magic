const observable = initialState => {
    const observers = []
    let state = initialState
    const ctx = {
        get() {
            return state
        },
        set(nextState) {
            state = nextState
            observers
                .forEach(observer => observer())
        },
        observe(observer) {
            const idx = observers.push(observer) - 1
            return () => {
                observers.splice(idx, 1)
            }
        }
    }

    return ctx
}

const test = () => {
    const num = observable(5)
    num.observe(() => {
        console.log('got change, num is', num.get())
    })
 
    num.set(5)
    num.set(20)
    num.set(44)
}
