# Functions

- [Functions](#functions)
  - [Function Basics](#function-basics)
  - [High Order Functions](#high-order-functions)
  - [Hard](#hard)
    - [Exercise 1](#exercise-1)
    - [Functional Programming basics](#functional-programming-basics)

## Function Basics

After running the below code what will be displayed in the console.log / terminal?

```javascript
function sayHello(s) {
  return 'Hi, ' + s;
}

console.log(sayHello); // should log:
console.log(sayHello()); // should log:
console.log(sayHello(3)); // should log:
console.log(sayHello('null')); // should log:
console.log(sayHello(null)); // should log:
console.log(sayHello(undefined)); // should log:
```

```javascript
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';

  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // should log:

console.log(stars); // should log:
```

```javascript
// Add Code Below

console.log(isOdd(5)); // should log:
console.log(isOdd(2008)); // should log:
```

```javascript
// Add Code Below

console.log(addN([1, 2, 3], 3)); // should return:
console.log(addN([3, 4, 5], 2)); // should return:
```

## High Order Functions

1. Can you explain what the below code does?
2. Can you explain why we created the below functions?
3. Convert it to es6 syntax!

```javascript
// ES5 version
var characters = [
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

var humans = function (data) {
  return data.filter(function (character) {
    return character.species === 'human';
  });
};

var images = function (data) {
  return data.map(function (character) {
    return character.img;
  });
};

function compose(func1, func2) {
  return function (data) {
    return func2(func1(data));
  };
}

var displayCharacterImages = compose(humans, images);

console.log(displayCharacterImages(characters));
/* Logs out the following array
   [ "http://example.com/img/luke.jpg",
     "http://example.com/img/han.jpg",
     "http://example.com/img/leia.jpg"
   ]
*/
```

## Hard

### Exercise 1

Implement a function named factorial that has one parameter: an integer, . It must return the value of factorial.

```javascript
/**
 *   Calculate the area of a rectangle.
 *
 *   number: an integer.
 *
 *	Returns the factorial of the given number
 **/
function factorial(number) {
  // Add code below
}
```

### Functional Programming basics

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
