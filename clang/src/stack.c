#include <stdlib.h>
#include <stdio.h>
#define STACKSIZE 16

typedef struct stack_s {
    void* items;
    unsigned int size;
} stack_t;

static stack_t stack_init() {
    stack_t s = {
        NULL, 0
    };

    return s;
}

static void stack_push(stack_t *stack, void* el) {
    if (stack->size != STACKSIZE) {
        ((char*)(stack->items))[stack->size++] = (char*)el;
    }
}

static void stack_pop(stack_t *stack) {
    if (stack->size > 0) {
        stack->items[--stack->size];
    }
}

int main(void) {
    stack_t stack = stack_init();
    int x = 15;
    stack_push(&stack, &x);

    return 0;
}
