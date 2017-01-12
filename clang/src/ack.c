#include <stdio.h>
#include <stdint.h>

static inline uint64_t ack(int m, int n) {
    if (m == 0) {
        return n + 1;
    }

    if (m > 0) {
        if (n == 0) {
            return ack(m - 1, 1);
        }

        if (n > 0) {
            return ack(m - 1, ack(m, n - 1));
        }
    }
}

int main(void) {
    const int m = 4;
    const int n = 4;
    const uint64_t result = ack(m, n);

    printf("ack(%d, %d): %ld", m, n, result);

    return 0;
}
