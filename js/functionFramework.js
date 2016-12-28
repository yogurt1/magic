class App {
    use(middleware) {
        const nextLength = this.stack.push(middleware)
        this.length = 
        return this
    }
}

function createApp() {
    const stack = []
    const createContext = (req, res) => {
        const ctx = {}
        ctx.state = {}
        ctx.cookies = new Cookies(req, res, {
            keys: settings.get("keys"),
            secure: true
        })
    }

    return {
        use(middleware) {
            stack.push(middleware)
            return this
        },

        simplify(koaMiddleware) {
            return next => ctx => koaMiddleware(ctx, next)
        },

        callback() {
            const last = stack[stack.length - 1]
            const rest = stack.slice(0, -1)
            const compose = next => rest.reduceRight(
                (g, f) => f(g), last(next))

            return (req, res) => {
                res.statusCode = 404
                // onFinished(res, ctx.onerror) 
                middleware(createContext(req, res))
            }
        }
    }
}
