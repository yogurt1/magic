module.exports = SimpleMap

SimpleMap.isMap = function isMap(map) {
    var isFunction = function(fn) {
        return typeof(fn) === "function"
    }
    return (
        isFunction(map.get) &&
        isFunction(map.set) &&
        isFunction(map.delete) &&
        isFunction(map.find) &&
        isFunction(map.forEach) &&
        !isNaN(map.size)
    )
}

function SimpleMap(nextContainer) {
    if (!(this instanceof SimpleMap)) {
        return new SimpleMap(nextContainer)
    }
    
    container = []
    if (nextContainer instanceof SimpleMap) {
        nextContainer.forEach(function(pair) {
            container.push(pair)
        })
    }

    if (nextContainer instanceof Array) {
        container = nextContainer
    }

    var size = container.length
    var self = this

    Object.defineProperty(this, "size", {
        configurable: false,
        get: function() {
            return size
        }
    })    

    var bind = function bind(fn, ctx) {
        return function bound() {
            return fn.apply(ctx, arguments)
        }
    }

    var forEach = this["forEach"] = function forEach(done, ctx) {
        if (ctx) {
            var done = bind(done, ctx)
        }
        
        for (var i = 0; i < size; i++) {
            var pair = container[i]
            done(pair, i, container)
        }
    }

    var find = this["find"] = function find(done, ctx) {
        var found = void(null)

        forEach(function(pair, i) {
            var isFound = done(pair, i)

            if (isFound) {
                found = pair
                return
            }
        }, ctx)

        return found
    }

    var set = this["set"] = function set(key, val) {
        var found = find(function(pair, i) {
            if (pair[0] === key) {
                return true
            }
        })

        if (found) {
            found[1] = val
            return self
        }

        var nextPair = [key, val]
        size = container.push(nextPair)

        return self
    }

    var del = this["delete"] = function del(key) {
        find(function(pair, i) {
            if (pair[0] === key) {
                container.splice(i, 1)
                size = container.length
                return true
            }
        })
    }


    var get = this["get"] = function get(key) {
        var found = find(function(pair) {
            if (pair[0] === key) {
                return true
            }
        })

        return found ? found[1] : void(null)
    }


    var has = this["has"] = function has(key) {
        var got = get(key)
        return !!got
    }

    var clear = this["clear"] = function clear() {
        container = []
    }

    return self
}
