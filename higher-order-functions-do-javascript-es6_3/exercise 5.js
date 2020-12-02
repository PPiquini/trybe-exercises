
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const sumA = names.map((elem) => elem.split('')).reduce((acc, elem) => acc.concat(elem));
  const sumAs = sumA.reduce((acc, elem) => (elem === 'a' || elem === 'A') ? acc + 1 : acc, 0);
  return sumAs;
}

assert.deepEqual(containsA(), 20);
