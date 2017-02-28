var redux = (reducer, initialState, middleware = "TODO") => (v => Object.keys(v).filter(k => k[0] !== '_').reduce((ac, k) => { ac[k] = v[k]; return ac; }, {}))({getState: () => this._state, dispatch: action => { this._state = reducer(this._state, action);return action }, subscribe: fn => { var idx = this._subscribers.push(fn); return () => this._subscribers.splice(idx - 1, 1); }, _subscribers: [], _state: reducer(initialState, {type: '@@INIT'}) })

module.exports = redux
