# map-tuple

Map a list of `n`-tuples to a function with `n` separate arguments

## Usage

```js
var mapTuple = require('map-tuple');

var tuples = [
  [1],
  [2, 3],
  ['x', 'y', 'z'],
];

var result = mapTuple(tuples, function(a, b, c) {
  console.log(a, b, c);
  return a + (b || 0) + (c || 0);
});
//=> 1 undefined undefined 
//=> 2 3 undefined
//=> x y z 

console.log(result);
//=> [1, 5, "xyz"]
```
