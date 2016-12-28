#include <stdlib.h>
#include <stdarg.h>
#include <stdbool.h>
#include <stdio.h>
#include <assert.h>

const int add(const int a, ...) {
    va_list list;
    va_start(list, a);
    int sum = 0;

    for (unsigned int i = 0; i < a; i++) {
        sum += va_arg(list, int);
    }

    va_end(list);
    return sum;
}

int main(void) {
    const int list[2] = {3, 4};
    printf("add(...[3,4]) = %d\n",
            add(list[0], list[1]));

    return 0;
}
