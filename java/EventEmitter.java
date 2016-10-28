package io.github.yogurt1.events;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ConcurrentMap;

public class EventEmitter {
    private ConcurrentMap<String, ConcurrentLinkedQueue<Listener>> listeners = new ConcurrentHashMap<String, ConcurrentLinkedQueue<Listener>>();

    public EventEmitter emit(String event, Object... args) {
        ConcurrentLinkedQueue<Listener> listeners = this.listeners.get(event);
        
        if (listeners != null) {
            for (Listener listener : listeners) {
                listener.call(args);
            }
        }

        return this;
    } 

    public EventEmitter on(String event, Listener listener) {
        ConcurrentLinkedQueue<Listener> listeners = this.listeners.get(event);
        if (listeners == null) {
            listeners = new ConcurrentLinkedQueue<Listener>();
            ConcurrentLinkedQueue<Listener> _listeners = this.listeners.putIfAbsent(event, listeners);
            
            if (_listeners != null) {
                listeners = _listeners;
            }
        }

        listeners.add(listener);
        return this;
    }

    public EventEmitter once(final String event, final Listener listener) {
        this.on(event, new OnceListener(event, listener));
        return this;
    }

    public EventEmitter clear() {
        this.listeners.clear();
        return this;
    }

    public EventEmitter clear(String event) {
        this.listeners.remove(event);
        return this;
    }

    public EventEmitter clear(String event, Listener listener) {
        return this;
    }

    public static interface Listener {
        public void call(Object... args);
    }

    private class OnceListener implements Listener {
        public final String event;
        public final Listener listener;

        public OnceListener(String event, Listener listener) {
            this.event = event;
            this.listener = listener;
        }

        @Override
        public void call(Object... args) {
            EventEmitter.this.clear(this.event, this);
            this.listener.call(args);
        }
    }
}
