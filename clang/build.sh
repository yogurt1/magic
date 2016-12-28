#!/bin/sh
CFLAGS="-Wall"
CC="gcc"

for file in $@
do
    src="src/${file}.c"
    bin="bin/${file}"
    ${CC} ${CFLAGS} ${src} -o ${bin}
done
