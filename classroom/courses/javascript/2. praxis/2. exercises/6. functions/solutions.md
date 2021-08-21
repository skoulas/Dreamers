# Functions

- [Functions](#functions)
  - [Function Basics](#function-basics)
  - [High Order Functions](#high-order-functions)
    - [Find Johnny](#find-johnny)
    - [Operations on an array](#operations-on-an-array)
  - [Hard](#hard)
    - [Exercise 1](#exercise-1)
    - [Functional Programming basics](#functional-programming-basics)

## Function Basics

```javascript
function sayHello(s) {
  return 'Hi, ' + s;
}

console.log(sayHello); // should log: [Function: sayHello]
console.log(sayHello()); // should log:  Hi, undefined
console.log(sayHello(3)); // should log: Hi, 3
console.log(sayHello('null')); // should log: Hi, null
console.log(sayHello(null)); // should log: Hi, null
console.log(sayHello(undefined)); // should log: NaN
```

```javascript
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';

  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // should log: Night Sky: The Moon, Sirius, The Milky Way

console.log(stars); // should log: Sirius
```

```javascript
const isOdd = (num) => !!(num % 2);

console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false
```

```javascript
function addN(arr, n) {
  return arr.map((i) => i + n);
}

console.log(addN([1, 2, 3], 3)); // should return: [ 4, 5, 6 ]
console.log(addN([3, 4, 5], 2)); // should return: [ 5, 6, 7 ]
```

## High Order Functions

[Solution Article](https://www.lullabot.com/articles/higher-order-functions-in-javascript)

```javascript
const characters = [
  {
    name: 'Luke Skywalker',
    img: 'http://example.com/img/luke.jpg',
    species: 'human',
  },
  { name: 'Han Solo', img: 'http://example.com/img/han.jpg', species: 'human' },
  {
    name: 'Leia Organa',
    img: 'http://example.com/img/leia.jpg',
    species: 'human',
  },
  {
    name: 'Chewbacca',
    img: 'http://example.com/img/chewie.jpg',
    species: 'wookie',
  },
];

const humans = (data) =>
  data.filter((character) => character.species === 'human');
const images = (data) => data.map((character) => character.img);
const compose = (func1, func2) => (data) => func2(func1(data));
const displayCharacterImages = compose(humans, images);

console.log(displayCharacterImages(characters));

/* Logs out the following array
   [ "http://example.com/img/luke.jpg",
     "http://example.com/img/han.jpg",
     "http://example.com/img/leia.jpg"
   ]
*/
```

### Find Johnny

```javascript
let people = [
  { name: 'Alexandra', age: 26, loc: 'Athens' },
  { name: 'Fotis', age: 33, loc: 'Athens' },
  { name: 'Johannes', age: 28, loc: 'Vienna' },
  { name: 'Johannes', age: 31, loc: 'Vienna' },
  { name: 'Stelios', age: 32, loc: 'Thessaloniki' },
  { name: 'Giorgos', age: 34, loc: 'Athens' },
  { name: 'Johannes', age: 28, loc: 'Athens' },
];

let getPersonByCity;
let getPersonByName;
let getPersonByAge;

let calculations = [getPersonByCity, getPersonByName, getPersonByAge];

let person;

console.log(person); // should return { name: 'Johannes', age: 28, loc: 'Vienna' },
```

### Operations on an array

Given a numbers array and an array of mini functions i want to call those functions against the given array.

```javascript
let numbers = [0, 1, 2, 3, 4, 5];

let multiplyByTwo = (num) => num * 2;
let divideByTwo = (num) => num / 2;
let addOne = (num) => num + 1;
let removeOne = (num) => num - 1;
let addJohannes = (num) => num + ' Jo';
let removeJohannes = (str) => str.split(' ')[0] * 1;

let calculations = [
  addOne,
  removeOne,
  multiplyByTwo,
  divideByTwo,
  addJohannes,
  removeJohannes,
];

// let arrayParser = (array, instructions) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(instructions(array[i]));
//     }
//     return result;
// }

// let calculator = (arr, cbArray) => {
//     let result = [...arr];
//     for (let i = 0; i < cbArray.length; i++) {
//         result = arrayParser(result, cbArray[i]);
//     }
//     return result;
// }

let arrayParser = (array, instructions) => {
  return array.map((el) => instructions(el));
};

let calculator = (arr, cbs) => {
  return cbs.reduce((acc, cb) => arrayParser(acc, cb), arr);
};

console.log(calculator(numbers, calculations));
```

## Hard

### Exercise 1

[Hackerrank factorial](https://www.hackerrank.com/challenges/js10-function/problem)

```javascript
/**
 *   Calculate the factorial of the given number
 *
 *   number: an integer.
 *
 *	Returns the factorial 3! = 3x2x1
 **/
function factorial(number) {
  return number > 1 ? number * factorial(number - 1) : 1;
}
```

### Functional Programming basics
