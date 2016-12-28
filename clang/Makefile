_SRC = $(wildcard src/*.c)
SRC = $(_SRC:src/%.c=%)
CC = gcc
CFLAGS = 

all: build

debug:
	@$(CC) $(CFLAGS) -DDEBUG -O0 -g3 -ggdb src/${SRC}.c

clean:
	@rm -rf bin/* ./a.out

build:
	@sh ./build.sh $(SRC)

test:
	@echo $(SRC)
