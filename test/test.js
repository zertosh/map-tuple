var test = require('tape');

test('map-tuple', function(t) {

  var mapTuple = require('../');

  t.test('should work with an initial array', function(t) {
    t.deepEqual(
      mapTuple([[1,1], [2,2]], function(a, b, c) { return a + b; }),
      [2, 4]);
    t.end();
  });

  t.test('should work without an initial array', function(t) {
    t.deepEqual(
      mapTuple(null, function(a, b, c) { return a + b + c; }),
      []);
    t.end();
  });

  t.end();
});
