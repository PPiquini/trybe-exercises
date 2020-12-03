const assert = require('assert')

const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let contador = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      contador += 1;
      results += contador;
    } else {
      results += characters[i];
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);

assert.strictEqual(typeof removeVowels, 'function', 'removeVowels precisa ser uma function');
assert.strictEqual(output, result, 'A função não substituiu as vogais corretamente');
