import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

public class PubSub {
    public static interface Listener {
        void onPublish(Message message) throws Error;
    }

    public static interface Message {
        Object getData();
    }

    private ConcurrentHashMap<String, ConcurrentLinkedQueue<Listener>> listeners = new ConcurrentHashMap<String, ConcurrentLinkedQueue<Listener>>();

    public void subscribe(String topic, Listener listener) {
        ConcurrentLinkedQueue<Listener> queue = this.listeners.get(topic);

    }

    public void unsubscribe(String topic, Listener listener) {
        ConcurrentLinkedQueue<Listener> queue = this.listeners.computeIfAbsent(topic,
                k -> new ConcurrentLinkedQueue<Listener>());
        queue.add(listener);
    }

    public void clear(String topic) {
        ConcurrentLinkedQueue<Listener> queue = new ConcurrentLinkedQueue<Listener>();
        this.listeners.remove(topic);
        this.listeners.put(topic, queue);
    }

    public void publish(String topic, Message message) {
        ConcurrentLinkedQueue<Listener> queue = this.listeners.computeIfAbsent(topic,
                k -> new ConcurrentLinkedQueue<Listener>());

        for (Listener listener : queue) {
            listener.onPublish(message);
        }
    }
}
