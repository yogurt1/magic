// Final-state machine

const FSM = () => {
    const stack = []
    const getCurrentState = () => stack.length <= 0 ? null :
        stack[stack.length - 1]

    const update = () => {
        const currentStat = getCurrentState()
        if (currentState !== null) {
            currentState()
        }
    }
    const pushState = state => getCurrenStatet() !== state &&
        stack.push(state)

    const popState = () => stack.pop()

    return {
        pushState,
        popState,
        update
    }
}

module.exports = FSM
