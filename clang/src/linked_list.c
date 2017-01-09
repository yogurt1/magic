#include <stdlib.h>
#include <stdio.h>

typedef struct ll_s ll_s;
typedef struct ll_s* ll_t;
ll_t ll_init();

struct ll_s {
    void* el;
    ll_t next;
    void (*set_el)(ll_t, void*);
    void* (*get_el)(ll_t);
    ll_t (*get_next)(ll_t);
    void (*set_next)(ll_t, ll_t);
};

static void ll_set_el(ll_t ll, void* el) {
    ll->el = el;
}

static void* ll_get_el(ll_t ll) {
    return ll->el;
}

static ll_t ll_get_next(ll_t ll) {
    return ll->next;
}

static void ll_set_next(ll_t ll, ll_t next) {
    ll->next = next;
}

ll_t ll_init() {
    ll_t ll = (ll_t)malloc(sizeof(ll_t));

    *ll = (ll_s){
        .el = NULL,
        .next = NULL,
        .set_el = &ll_set_el,
        .get_el = &ll_get_el,
        .set_next = &ll_set_next,
        .get_next = &ll_get_next
    };

    return ll;
}

int main(void) {
    ll_t ll = ll_init();
    int a = 4;
    int b = 15;

    ll->set_el(ll, &a);
    ll->set_next(ll, ll_init());
    ll->get_next(ll)->set_el(ll, &b);


    int* el = (int*)ll->get_el(ll);
    ll_t next = ll->get_next(ll);
    int* next_el = (int*)next->get_el(next);

    printf("ll->el: %d, ll->next->el\n",
            el,
            next_el);

    return 0;
}
