#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

uint_fast64_t factorial(uint_fast64_t n) {
    uint_fast64_t final = 1;
    
    for (uint_fast64_t i = 1; i < n; i++) {
        final *= i;
    }

    return final;
}

int main(void) {
    uint_fast64_t n;

    printf("factorial. enter number: ");
    scanf("%d", &n);

    printf("\nfactorial of %d is %lu\n", n, factorial(n));

    return 0;
}
