module.exports = PubSub

/**
 * TODO: Publish info to subscribers via functional compositing
 *
 * Pub/Sub pattern in pure functional style
 * There no variables except of arguments :-)
 *
 * @param {object} topics - predefined topics
 * @returns {function} Topic
 */
function PubSub(topics = {}) {
    /**
     * Topic function :-)
     *
     * @constructor
     * @param {string} name
     * @returns {object} pub/sub methods
     */
    return function Topic(topic) {
        if (!topics[topic]) {
            topics[topic] = new Set()
        }
        
        return {
            /**
             * Subscribe listener
             *
             * @param {function} event listener
             * @returns {function} unsubscribe
             */
            subscribe(listener) {
                /* Set doesnt allow to include same thing more than one time */
                topics[topic].add(listener)
               
                /**
                 * Remove listener from queue
                 *
                 * @returns {Set} Topic queue
                 */
                return function unsubscribe() {
                    return topics[topic].delete(listener)
                }
            },

            /**
             * Publish data
             *
             * @param {any} Data - can be anything
             */
            publish(info) {
                let queue = topics[topic]

                if (queue.size > 0) {
                    for (let listener of queue) {
                        listener(info)
                    }
                }

                /* Remove reference for better GC */
                queue = null
            },

            /* Clear queue */
            clear() {
                topics[topic] = new Set()
                return topics[topic]
            },

            save() {
                return topics
            }
        }
    }
}
