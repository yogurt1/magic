#include <stdlib.h>
#include <stdio.h>

int main(void) {
    int arr[7] = {
        1,
        25,
        51,
        33,
        43,
        6,
        0
    };

    for (unsigned int i = 0; i < 7; i++) {
        int a = arr[i];
        int b = arr[i + 1];
        int diff = a - b;
        
        if (diff > 0) {
            arr[i + 1] = a;
            arr[i] = b;
        }
    }

    printf("[ ");
    
    for (unsigned int i = 0; i < 7; i++) {
        printf("%d, ", arr[i]);
    }

    printf("]\n");

    return 0;
}
