
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const joinEverything = arrays.reduce((acc, elem) => {
    return acc.concat(elem);
  }, [])
  return joinEverything;
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);