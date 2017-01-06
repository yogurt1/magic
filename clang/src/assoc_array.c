#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdint.h>
#include <jemalloc/jemalloc.h>

#define AR_EQUALS(a, b) strcmp(a, b) == 0
#define AR_DESTROY(ar) {\
    free(ar); \
    ar = NULL; \
}
#define AR_EACH(ar, __code__) {\
    uint_fast8_t size = ar->size; \
    for (uint_fast8_t i = 0; i < size; i++) {\
        ar_key _k = ar->keys[i]; \
        ar_val _v = ar->values[i]; \
        __code__ \
    }}

typedef char* ar_key;
typedef void* ar_val;
typedef char* ar_pair[2];
typedef struct ar_s ar_s;
typedef struct ar_s* ar_t;
typedef void (*ar_each_cb)(ar_key, ar_val, ar_t);
ar_t ar_init();

struct ar_s {
    uint_fast8_t size;
    ar_key* keys;
    ar_val* values;
    void (*set)(ar_t, ar_key, ar_val);
    ar_val (*get)(ar_t, ar_key);
    void (*delete)(ar_t, ar_key);
    void (*clear)(ar_t);
    void (*each)(ar_t, ar_each_cb);
    bool (*has)(ar_t, ar_key);
};

static bool ar_has(ar_t ar, ar_key k) {
    AR_EACH(ar, {
        if (AR_EQUALS(_k, k)) {
            return true;
        }
    })

    return false;
}


static ar_val ar_get(ar_t ar, ar_key k) {
    AR_EACH(ar, {
        if (AR_EQUALS(_k, k)) {
            ar_val v = ar->values[i];
            return v;
        }
    })

    return NULL;
}

static void ar_set(ar_t ar, ar_key k, ar_val v) {
    if (ar->has(ar, k)) {
        AR_EACH(ar, {
            if (AR_EQUALS(_k, k)) {
                ar->values[i] = v;
                return;
            }
        })
    }

    uint_fast8_t size = ar->size + 1;

    ar_key* keys = (ar_key*)realloc(ar->keys,
        sizeof(ar_key) * size);
    ar_val* values = (ar_val*)realloc(ar->values,
        sizeof(ar_val) * size);

    if (keys == NULL || values == NULL) {
        free(ar->keys);
        free(ar->values);
        printf("Allocation error (ar->keys)\n");
        exit(1);
    }

    ar->keys = keys;
    ar->values = values;

    uint_fast8_t last = size - 1;
    ar->keys[last] = k;
    ar->values[last] = v;
    ar->size = size;
}

static void ar_clear(ar_t ar) {
    ar->size = 0;
    free(ar->values);
    free(ar->keys);
    ar = ar_init();
}

static void ar_delete(ar_t ar, ar_key k) {
    uint_fast8_t size = ar->size - 1;
    ar->size  = size;
    ar->keys = realloc(ar->keys,
        sizeof(ar_key) * size);
    ar->values = realloc(ar->values,
        sizeof(ar_val) * size);
}

static void ar_each(ar_t ar, ar_each_cb cb) {
    AR_EACH(ar, cb(_k, _v, ar););
}

ar_t ar_init() {
    ar_t ar = (ar_t)malloc(sizeof(ar_s));
 
    *ar = (ar_s){
        .size = 0,
        .keys = (ar_key*)malloc(sizeof(ar_key)),
        .values = (ar_val*)malloc(sizeof(ar_val)),
        .set = &ar_set,
        .get = &ar_get,
        .has = &ar_has,
        .delete = &ar_delete,
        .clear = &ar_clear,
        .each = &ar_each,
    };
    
    return ar;
}

void ar_destroy(char** ar) {
    free(ar);
    *ar = NULL;
}

int main(void) {
    ar_t ar = ar_init();
    ar->set(ar, "k", "test");
    ar->set(ar, "other", "lolol");
    ar->set(ar, "final", "testagain");
    ar->set(ar, "k", "rewrite");

    #ifdef DEBUG
    #define _LOG(k, v) printf("| %-5s | %-10s |\n", k, v);
        _LOG("key", "val");
        _LOG("-----", "---------");
        AR_EACH(ar, _LOG(_k, _v));
        
        ar->clear(ar);
        
        printf("after clear\n");
        AR_EACH(ar, _LOG(_k, _v));

        printf("after destroy\n");
        AR_DESTROY(ar);
        printf("ar == %ld\n", ar);

    #endif

    return 0;
}
