module Main where
import System.IO
import Factorial

main :: IO ()
main = do
    putStrLn "factorial. enter number"
    line <- getLine
    let n = read line :: Word
    putStrLn ("factorial of " ++ show n ++ " is " ++ show (factorial n))

