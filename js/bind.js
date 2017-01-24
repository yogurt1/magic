function bind(fn, ctx) {
    return (...args) => fn.apply(ctx, args)
}
