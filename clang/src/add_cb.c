#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define lambda(ret_type, fn_body) \
    ({ ret_type __fn__ fn_body \
        __fn__; \
    })

typedef const int (*cb_t)(const int, const int);

int main(void) {
    cb_t add = lambda(const int,
            (const int a, const int b) {
                return a + b;
            });

    const int a = 15;
    const int b = 2;
    const int res = add(a, b);
    
    printf("add(a+b) = %d\n", res);
    
    return 0;
}
