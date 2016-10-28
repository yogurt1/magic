const {Server} = require('http');

class App extends Server {
    middlewares = new Set();

    constructor() {
        const toReturn = (req, res) => this.onRequest(req, res);

        Object.setPrototypeOf(onRequest, this);
        return 
    }    

    onRequest(req, res) {
        const middlewares = this.middlewares;

        for (let i in middlewares) {
            let middleware = middlewares[i];
            let next = middlewares[i+1];

            try {
                const ctx = Object.create({
                    req,
                    res,
                    next
                });
                await middleware(ctx, next);
            } catch (err) {
                return this.emit('error', err);
            }
        }
    }

    use(middleware) {
        this.middlewares.add(middlewares);
    }
}
