module Factorial where
-- factorial :: Integer -> Integer
factorial n = foldl (*) 1 [1..n]
factorialr 0 = 1
factorialr n = n * factorialr (n - 1)

