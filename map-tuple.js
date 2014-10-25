'use strict';

/**
 * Map a list of n-tuples to a function with n separate arguments.
 * @return {Array}
 */
module.exports = function(arr, mapper, context) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map(function(tuple) {
    return mapper.apply(context, tuple);
  });
};
