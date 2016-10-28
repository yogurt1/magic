async function createStore(reducer, initialState) {
    const createState = nextState => async () => state = nextState
    let state = await createState(initialState);
    
    const dispatch = async action => {
        const currentState = await state();
        nextState = await reducer(currentState, action);
        state = await createState(state);
    }

    dispatch({type: '@@INIT'});
    return {
        dispatch,
        async replaceReducer(nextReducer) {
            const nextStore = createStore(reducer, state);
            return nextStore;
        },

        async getState() {
            return state;
        }
    }
}

const reducer = async (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

async function someStuff() {
    const store = await createStore(reducer);
    const createAction = type => ({type});

    await store.dispatch(createAction('INCREMENT'));
    await store.dispatch(createAction('INCREMENT'));
    await store.dispatch(createAction('DECREMENT'));

    const state = await store.getState();
    console.log(state);
}

someStuff()
