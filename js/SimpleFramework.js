import {Server} from 'http'

class App extends Server {
    constructor(ctx) {
        super()

        this.middleware = this.compose(...ctx.middleware)
        this.on('request', this.onRequest)
        this.on('error', this.onerror)
    }

    async handler(req, res) {
        const ctx = this.createContext(req, res)
        
        try {
            await this.middleware(ctx)
        } catch(err) {
            this.emit('error', err)
        }
    }
    
    get onerror() {
        return this._onerror || err => super.emit('error')
    }

    set onerror(handler) {
        this._onerror = handler
    }
}
