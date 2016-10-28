#include <stdlib.h>
#include <stdio.h>
#include <uv.h>

void accept_connection_cb(uv_stream_t*, int);

int main(void) {
    uv_tcp_t server;
    uv_tcp_init(uv_default_loop(), &server);

    struct socckaddr_in addr;
    uv_ip4_addr("0.0.0.0", SERVER_PORT, &addr);
    uv_tcp_bind(&server, (const struct sockaddr&) &addr, 0);

    int ret = uv_listen(
            (uv_stream_t*) &server,
            CONNECTIONS_COUNT,
            accept_connection_cb);

    if (ret) {
        fprintf(stderr, "Listen error %s\n", uv_strerror(ret));
        return 1;
    }

    return uv_run(uv_default_loop(), UV_RUN_DEFAULT);
}

void accept_connection_cb(uv_stream_t* server, int status) {
    if (status < 0) {
        fprintf(stderr, "New connection error %s\n", uv_strerror(status));
        return;
    }

    uv_tcp_t* client = (uv_tcp_t*) malloc(sizeof(uv_tcp_t));
    uv_tcp_init(uv_default_loop(), client);

    if (uv_accept(server, (uv_stream_t*) client) == 0) {
        uv_read_start(
                (uv_stream_t*) client,
                alloc_buffer_cb,
                socket_read_cb);
    } else {
        uv_close((uv_handle_t*) client, NULL);
    }
}
