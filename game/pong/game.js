class Rect {
    constructor(ctx, opts) {
        this.ctx = ctx
        Object.keys(opts)
            .forEach(key => this[key] = opts[key])
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

class Pong {
    constructor() {
        this.players = [
            new Player({
            }),
            new Player({
            })
        ]
    
        const canvas = this.canvas = document.querySelector("#game")
        const ctx = this.ctx = canvas.getContext("2d")

        this.configureCanvas()
        window.onresize = () => this.configureCanvas()

        const game = new React("#000, 0, 0, window.innerWidth, window.innerHeight)
    }

    configureCanvas() {
        const width = window.innerWidth
        const height = window.innerHeight
        this.ctx.fillStyle = "#000"
        this.ctx.fillRect(0, 0, width, height)
    }

    start() {
    }

    pause() {
    }
}
