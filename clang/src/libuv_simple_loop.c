#include <stdlib.h>
#include <stdio.h>
#include <uv.h>

int main(void) {
    uv_loop_t* loop = malloc(sizeof(uv_loop_t));
    uv_loop_init(loop);

    printf("Now quiting.\n");
    uv_run(loop, UV_RUN_DEFAULT);

    uv_loop_close(loop);
    free(loop);

    return 0;
}
