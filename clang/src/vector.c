#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>
#define VEC_EACH(vec, __code__) {\
    {\
        uint_fast8_t size = vec->size; \
        for (uint_fast8_t _i = 0; _i < size; _i++) {\
            vec_el _el = vec->els[_i];\
            { __code__ }\
        }\
    }\
}

typedef void* vec_el;
typedef struct vec_s vec_s;
typedef struct vec_s* vec_t;
typedef (*vec_each_cb)(vec_el, vec_t);

struct vec_s {
    uint_fast8_t size;
    vec_el* els;
    void (*add)(const vec_t, vec_el);
    bool (*has)(const vec_t, vec_el);
    void (*pop)(const vec_t, vec_el);
    void (*each)(const vec_t, vec_each_cb);
    void (*clear)(const vec_t)
};

static void vec_add(const vec_t vec, const vec_el el) {
    const uint_fast8_t size = vec->size;
    vec->els = (vec_el*)realloc(vec,
            sizeof(vec_el) * (size + 1));
    vec->els[size] = el;
}

static bool vec_has(const vec_t v, const vec_el el) {
    VEC_EACH(v, {
        if (el == _el) {
            return true;
        }
    });

    return false;
}

static void vec_pop(const vec_t vec) {
    vec->els = (void*)realloc(vec,
            sizeof(vec_el) * --vec->size);
}

static void vec_each(const vec_t vec, vec_each_cb cb) {
    VEC_EACH(vec, {
        cb(_el, vec);
    });
}

static void vec_clear(const vec_t vec) {
}

vec_t vec_init() {
    vec_t vec = (vec_t)malloc(sizeof(vec_s));
    
    *vec = (vec_s){
        .size = 0,
        .els = (vec_el*)malloc(sizeof(vec_el)),
        .add = &vec_add,
        .has = &vec_has,
        .pop = &vec_pop,
        .clear = &vec_clear,
        .each = &vec_each,
    };

    return vec;
}

int main(void) {
    vec_t vec = vec_init();
    int a = 15;
    int b = 13;
    int c = 156;
    int d = 1999;

    vec->add(vec, &a);
    vec->add(vec, &b);
    vec->add(vec, &c);
    vec->add(vec, &d);

    VEC_EACH(vec, {
        printf("vec[%d] = %d\n", _i, _el);
    });

    return 0;
}
