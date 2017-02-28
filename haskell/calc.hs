getMathOperationFromChar :: Char -> Function
getMathOperationFromChar c
    | c == '+' = (+)
    | c == '-' = (-)
    | c == '*' = (*)
    | c == '/' = (/)
