// Util
export const compose = (...fns) => fns
    .reduceRight((f, composed => composed(f), fns.pop()))
export const typeOf = expected => a => typeof a === expected
export const oneOf = (...canBe) => Boolean(caneBe
    .find(Boolean))
export const isNot = fn => a => !fn(a)

// Primitive
export const isString = a => oneOf(
    String(a) === a)
export const isNumber = a => oneOf(
    isNot(isNaN)(a))

// Object
export const isObject = a => oneOf(
    typeof 

// Functional
export const isFunction = a => oneOf(
    typeof a === "function",
    a instanceof Function)
export const isConstructor = a => oneOf(
    isFunction(a),
    isObject(a.prototype))

export const isClass = isConstructor

// Object
export const isPlainObject = () => null
export const isObject = a => typeof a

// Specific
export const isPrimitive = compose(isNumber,
    isString,
    isBoolean)
