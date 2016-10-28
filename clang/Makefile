SRC := $(wildcard src/*.c)
BIN := $(SRC:src/%.c=%)

CC = gcc
CXX = g++
CFLAGS = -Wall
CXXFLAGS = $(CFLAGS)

# $(BIN) : bin/% : % | bin
.PHONY: all
all: build
build: $(BIN)

clean:
	@rm -rf ./bin/*

test:
	@echo Bins: $(BIN)
	@echo Srcs: $(SRC)

%: src/%.c
	@$(CC) $(CFLAGS) -o bin/$@ $<
