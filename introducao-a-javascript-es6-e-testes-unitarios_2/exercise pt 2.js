const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// //Primeiro exercício
// const newKey = (obj, key, value) => {
//   obj[key] = value;
// }
// newKey(lesson2, 'turno', 'manhã')

// //Segundo exercício
// const keysList = (obj) => {
//   Object.keys(obj);
// }

// //Terceiro  exercício
// const objLength = (obj) => {
//   const size = Object.keys(obj);
//   console.log(size.length)
// }

// //Quarto exercício
// const objValues = (obj) => {
//   const val = Object.values(obj);
//   console.log(val)
// }

//Quinto exercício
// const allLessons = {};
// const entradas = Object.assign(allLessons, lesson1, lesson2, lesson3);
// for (i in entradas) {
//   allLessons['lesson'[i]] = entradas[i];
// }
// console.log(allLessons)
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const allLessons = Object.assign({}, {'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});
console.log(allLessons)