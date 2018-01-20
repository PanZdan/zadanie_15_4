console.log('Zadanie 1');

const firstWords = 'Hell';
const secondWords = 'World!';
console.log(`${firstWords} ${secondWords}`);


console.log('Zadanie 2');

const multiple = (a, b = 1) => a * b;
console.log(multiple(1512));


console.log('Zadanie 3');

const average = (...args) => {
  
  const sum = args.reduce( (a, b) => a + b);
  
  return sum / args.length;

};
console.log(average(2, 2));


console.log('Zadanie 4');

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

const newGrades = [...grades, 1];
console.log(average(...newGrades));


console.log('Zadanie 5');

const differentTable = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = differentTable;
console.log(`Hello, my name is ${firstname} ${lastname}`);