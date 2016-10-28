SRC := $(wildcard src/*.rs)
BIN := $(SRC:src/%.rs=%)

RUSTC = rustc

# $(BIN) : bin/% : % | bin
.PHONY: all
all: build
build: $(BIN)

clean:
	@rm -rf ./bin/*

test:
	@echo Bins: $(BIN)
	@echo Srcs: $(SRC)

%: src/%.rs
	@$(RUSTC) -o bin/$@ $<
