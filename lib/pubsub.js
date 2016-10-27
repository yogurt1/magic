module.exports = function PubSub(topics = {}) {
    return function Topic(topic) {
        if (!topics[topic]) {
            topics[topic] = new Set()
        }
        
        return {
            subscribe(listener) {
                topics[topic].add(listener)
                
                return function unsubscribe() {
                    return topics[topic].delete(listener)
                }
            },

            publish(info) {
                let listeners = topics[topic]

                if (listeners.size > 0) {
                    for (let listener of listeners) {
                        listener(info)
                    }
                }
            },

            getTopic() {
                return topics[topic]
            
            },

            clear() {
                return topics[topic].clear()
            }
        }
    }
}
