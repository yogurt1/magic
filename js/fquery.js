module.exports = function fQuery(selector, _window) {
    let window = _window || window || global.window

    if (window) {
        window.$ = fQuery
    } else {
        return null
    }

    if (!selector) {
        return null
    }

    let el = typeof(selector) === 'string'
        ? sizzle(selector)
        : selector

    let el = _el instanceof Array
        ? (cb) => _el.forEach(el => cb(el))
        : (cb) => cb(_el)

    return {
        animate(animation) {
            return function stop() {
                return false
            }
        },

        css(css) {
            let keys = Object.keys(css)
            let keysLength = keys.length
            
            for (let key, i = 0; i < keysLength; i++) {
                key = keys[i]
                el(el => el.style[key] = css[key])
            }
        }    
    }
}
