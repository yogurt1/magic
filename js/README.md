##### [x] SimpleMap.js
```js
var map = new SimpleMap()
```
ECMAScript 2015 `Map` simple implemenation blazing fast for ES5


###### [x] sum.js
```js
sum(5)(6) * 2 === (5+6)*2 // => 22
sum(5)(6)(7) !== 18
sum(5)(6)(7) == 18 // => auto-cast
+sum(5)(6)(7) === 18 // => case function to int
parseInt(sum(5)(6)(7)) === Number(sum(5)(6)(7)) // construct number from result of `toString()`
```
More about type conversion: [ECMA-262#Section 9. 1](https://www.ecma-international.org/ecma-262/5.1/#sec-9.1)
