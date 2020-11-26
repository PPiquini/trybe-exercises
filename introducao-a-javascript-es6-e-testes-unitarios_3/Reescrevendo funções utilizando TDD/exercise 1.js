const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting[person] = `Hello ${people[person]}`;
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function', 'greetPeople precisa ser uma function');
assert.deepStrictEqual(output, result, 'A string não foi feita corretamente');
