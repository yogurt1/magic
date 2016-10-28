#include <stdlib.h>
#include <stdio.h>
#define MAXLISTENERS 25

typedef struct ps_message_s {
    const void* data;
} ps_message_t;

typedef unsigned int (*ps_listener_cb)(ps_message_t* message);

typedef struct ps_s {
    ps_listener_cb listeners[MAXLISTENERS];
    unsigned int end;
} ps_t;

unsigned int ps_subscribe(ps_t* ps, ps_listener_cb listener) {
    ps->listeners[ps->end + 1] = listener;
    return 1;
}

unsigned int ps_publish(ps_t* ps, ps_message_t* message) {
    unsigned int errno = 1;
    
    for (unsigned int i = 0; i < ps->end; i++) {
        ps_listener_cb listener = ps->listeners[i];
        listener(message); /* errno = ... */
    }

    return errno;
}

unsigned int ps_init(ps_t* ps) {
    ps->end = 0;
    return 1;
}

unsigned int listener(ps_message_t* message) {
    printf("got message: %s", (char*) message->data);
    return 1;
}

int main(void) {
    ps_t ps;
    ps_init(&ps);
    ps_subscribe(&ps, &listener);

    ps_message_t message;
    message.data = "Hello, world!";

    ps_publish(&ps, &message);

    return 0;
}
