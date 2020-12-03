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

const allLessons = Object.assign({}, {'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});
const aulas = Object.values(allLessons.lesson1);

const getValueByNumber = (lesson, index) => {
  let lessonValue = allLessons[`${lesson}`];
  return Object.values(lessonValue)[`${index}`];
}

console.log(getValueByNumber(lesson1, 0))

// console.log(aulas[0])