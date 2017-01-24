function createClass(baseClass, proto) {
    if (typeof(proto) === "undefined") {
        proto = baseClass
        baseClass = null
    }

    if (baseClass) {
        // const oldProto = proto.__proto__
        proto.__proto__ = baseClass
    }

    const ctor = function(){}
    
    proto.constructor = ctor
    ctor.prototype = proto
}
