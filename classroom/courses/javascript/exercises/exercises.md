# Exercises

- [Exercises](#exercises)
  - [Arrays Basics](#arrays-basics)
  - [Function Basics](#function-basics)
  - [Scope](#scope)
  - [Object Basics](#object-basics)
  - [Hard](#hard)
  - [Extra Hard](#extra-hard)
  - [High Order Functions](#high-order-functions)
  - [Fun Part](#fun-part)
    - [We are Illuminati](#we-are-illuminati)

## Arrays Basics

Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

```javascript
const fb = [];
// ADD CODE HERE

}
```

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
const isOdd = (num) => !!(num % 2);

console.log(isOdd(5)); // should log:
console.log(isOdd(2008)); // should log:
```

```javascript
function addN(arr, n) {
  return arr.map((i) => i + n);
}

console.log(addN([1, 2, 3], 3)); // should return:
console.log(addN([3, 4, 5], 2)); // should return:
```

## Scope

For all of these, what is the output on the console when running the code segment?

```javascript
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  console.log(a);
}
q1();
```

```javascript
// #2
var a = 0;

function q2() {
  a = 5;
}
q2();
console.log(a);

function q22() {
  console.log(a);
}
```

```javascript
//#3
function q3() {
  globalThis.a = 'hello';
}

function q32() {
  console.log(a);
}
q3();
q32();
```

```javascript
//#4
var a = 1;
function q4() {
  var a = 'test';
  console.log(a);
}
q4();
```

```javascript
//#5
var a = 2;
if (true) {
  var a = 5;
  console.log(a);
}
console.log(a);
```

## Object Basics

GreenEnergy ships have fuel type avocado oil
Ships that have disabled property true are remotely disabled.

```javascript
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

function greenEnergy(sp) {
  // add code here
}

function remotelyDisable(sp) {
  // add code here
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
```

Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

```javascript
// ADD CODE HERE

const DC = { Bruce: 'Wayne', Harley: 'Quinn' };
const supernatural = {
  Sam: 'Winchester',
  Dean: 'Winchester',
  Waldo: 'unknown',
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
```

## Hard

Complete the function holidays that accepts an array of strings and iterates through the array. If the array contains the string "October", return "Happy Halloween". Otherwise, return the string "Have a great day!". Do not use a variable to store the result that you are returning.

```javascript
function holidays(arr) {
  // ADD CODE HERE
}

const months = ['April', 'May', 'June', 'October'];
const animals = ['Cats', 'Dogs', 'Pigs'];
console.log(holidays(months)); // should return:
console.log(holidays(animals)); // should return:
```

Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

```javascript
function multiplyAll(...args) {
  // ADD CODE HERE
}
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375
```

Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.

```javascript
function mergingElements(array1, array2) {
  // ADD CODE HERE
}

console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
```

Write a function mergingTripletsAndQuints which adds the corresponding element from array2 if the element from array1 is divisible by 3 or 5 and returns the new array.

```javascript
function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
}

console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
```

write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.

```javascript
function imAboutToExplodeWithExcitement(n) {
  // ADD CODE HERE
}

imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
```

Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.

```javascript
function getTheRange(arr) {
  // ADD CODE HERE
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
```

write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

```javascript
function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
}

console.log(closestToTheMark(25, 75));
```

Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

```javascript
function arrayBuilder(obj) {
  // ADD CODE HERE
}

console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
```

## Extra Hard

Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

```javascript
function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  return Math.abs(theMark - player1) < Math.abs(theMark - player2)
    ? 'Player 1 is closest'
    : 'Player 2 is closest';
}

console.log(closestToTheMark(25, 75));
```

Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

```javascript
function disemvowel(string) {
  // ADD CODE HERE
}

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
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

## Fun Part

### We are Illuminati

There is a secret message inside the below text.

since everyone can read encoding text in neutral sentences is doubtfully effective.

```javascript
// ADD CODE HERE

console.log(secretMessage);
```

Cats they say have 9 lives but i have 0 clue what this means.
To have 12 cats is a feat, but to have 15 cats is madness.
22 days ago i called Fotis 5 times but had 0 response.
He may have lost his patience with his 10 cats and 19 dogs
lurking around the neightboardhood.

```javascript
const alphabet = 'abcdefghijklmnopqrstuvwz';
// ADD CODE HERE

// why the text has numbers?
// what is the range of those numbers?
// what if those numbers translate in something else?

console.log(secretMessage);
```

```

```