'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('Zadanie 1');

var firstWords = 'Hell';
var secondWords = 'World!';
console.log(firstWords + ' ' + secondWords);

console.log('Zadanie 2');

var multiple = function multiple(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiple(1512));

console.log('Zadanie 3');

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};

console.log(average(5, 2));

console.log('Zadanie 4');

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

var newGrades = [].concat(grades, [1]);
console.log(average.apply(undefined, _toConsumableArray(newGrades)));

console.log('Zadanie 5');

var differentTable = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = differentTable[2],
    lastname = differentTable[4];

console.log('Hello, my name is ' + firstname + ' ' + lastname);
