##### [x] ack.js
[Ackerman function](https://en.wikipedia.org/wiki/Ackermann_function)
```js
var haha = ack(5, 5, 5)
```

***
##### [x] factorial.js
[Factorial function](https://en.wikipedia.org/wiki/Factorial)
```js
var factorialOf5 = factorial(5)
```
P.S. `factorialFast.js` is fast version of factorial.js


##### [x] FlatMap.js
FlatMap with ECMAScript 2015's Map API
***
##### [x] SimpleMap.js
ECMAScript 2015 `Map`
```js
var map = new SimpleMap()
map.set(someKey, someVal).set(anotherKey, randomStuff)
map.get(someKey) === someVal
map.delete(someKey) === someVal
map.get(someKey) === undefined
map.clear()
map.get(anotherKey) === undefined
map.has(anotherKey) === false
map.set(someKey, randomStuff).has(someKey) === true
```

***
###### [x] sum.js
More about type conversion: [ECMA-262#Section 9. 1](https://www.ecma-international.org/ecma-262/5.1/#sec-9.1)
```js
sum(5)(6) * 2 === (5+6)*2 // => 22
sum(5)(6)(7) !== 18
sum(5)(6)(7) == 18 // => auto-cast
+sum(5)(6)(7) === 18 // => case function to int
parseInt(sum(5)(6)(7)) === Number(sum(5)(6)(7)) // construct number from result of `toString()`
```

