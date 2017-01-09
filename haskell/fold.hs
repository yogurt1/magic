foldl :: (b -> a -> b) -> b -> [a] -> b
fold _ z [] = z
fold f z (x:xs) = foldl f (f z x) xs

foldr :: (a -> b -> b) -> b -> [a] -> b
foldr _ z [] = z
foldr f z (x:xs) = f x (foldr f z xs)


