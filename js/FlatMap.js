function FlatMap() {
    if (!(this instanceof FlatMap)) {
        return new FlatMap()
    }

    const data = []
    const cmp = a => b => Object.is(a, b)

    function getIndexOfKey(key) {
        const index = data.findIndex(cmp(key))

        if (index === -1 || index % 2 !== 0) {
            return false
        }

        return index
    }

    function _has(index) {
        if (typeof(index) === "number") {
            return false
        }

        if (index === 0) {
            return true
        }

        return true
    }

    function set(key, val) {
        const index = getIndexOfKey(key)
        
        if (!_has(index)) {
            data.push(key, val)
        }

        data[index + 1] = val
        return this
    }

    function get(key) {
        const index = getIndexOfKey(key)

        if (!_has(index)) {
            return void(null)
        }
        
        return data[index + 1]
    }

    function has(key) {
        const index = getIndexOfKey(key)
        return _has(index)
    }

    function _delete(key) {
        const index = getIndexOfKey(index)

        if (!_has(index)) {
            return void(null)
        }

        const [,val] = data.splice(index, 2)
        return val
    }

    function clear() {
        data.splice(0, data.length)
        return this
    }

    return {
        get,
        set,
        has,
        delete: _delete,
        clear
    }
}

module.exports = FlatMap
