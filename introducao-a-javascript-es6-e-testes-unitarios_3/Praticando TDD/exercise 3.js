const assert = require('assert');

const addAllnumbers = (numbers) => {
  let output = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    output += numbers[i];
  }
  return output;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
