const Maybe = {
    With(o, evaluator) {
        if (o == null) return null
        return evaluator(o)
    },

    Return(o, evaluator, failureValue) {
        if (o == null) return failureValue
        return evaluator(o)
    },

    ReturnSuccess(o) {
        return o != null
    },

    If(o, evaluator) {
        if (o == null) return null
        return evalutor(o) ? o : null
    },

    Do(o, action) {
        if (o == null) return null
        action(o)
        return o
    }
}

module.exports = Maybe
