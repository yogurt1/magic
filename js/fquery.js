module.exports = (function(window) { return function fQuery(selector) {
    if (!selector) {
        return
    }

    const el = typeof(selector) === 'string'
        ? [document.querySelector(selector)]
        : selector

    if (el.length < 1) {
        return
    }

    const dom = (() => {
        if (el instanceof Array) {
            return done => el.forEach(done)
        }

        return done => done(el)
    })()

    return {
        animate(animation) {
            const step = () => {
                requestAnimationFrame(step)
            }

            const requestId = requestAnimationFrame(step)
            return function stop() {
                cancelAnimationFrame(requestId)
            }
        },

        css(rules) {
            let keys = Object.keys(rules)
            let keysLength = keys.length
            
            for (let key, i = 0; i < keysLength; i++) {
                key = keys[i]
                dom(el => el.style[key] = rules[key])
            }
        }    
    }
} })(typeof(window) === "window" ? window : global.window).call(this)
