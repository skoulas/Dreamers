# Solutions

- [Solutions](#solutions)
  - [Function Scope](#function-scope)
  - [Hard](#hard)
  - [Extra Hard](#extra-hard)
  - [Fun Part](#fun-part)
    - [We are Illuminati](#we-are-illuminati)

## Function Scope

```javascript
// #1
// should return: 3
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
// should return: 5
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
// should return: hello
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
// should return: test / 1
var a = 1;
function q4() {
  var a = 'test';
  console.log(a);
}
q4();
console.log(a);
```

```javascript
//#5
// should return: 5 / 5
var a = 2;
if (true) {
  var a = 5;
  console.log(a);
}
console.log(a);
```

## Hard

Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

```javascript
function multiplyAll(...args) {
  return args.reduce((acc, arg) => acc * arg, 1);
}
```

```javascript
function mergingElements(array1, array2) {
  // ADD CODE HERE
  return array1.map((item, index) => item + array2[index]);
}
```

```javascript
function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  return array1.map((item, index) =>
    !(item % 3) || !(item % 5) ? item + array2[index] : item
  );
}
```

```javascript
function imAboutToExplodeWithExcitement(n) {
  // ADD CODE HERE
  while (n > 0) {
    switch (n) {
      case 5:
        console.log("Oh wow, I can't handle the anticipation!");
        break;
      case 3:
        console.log("I'm about to explode with excitement!");
        break;
      default:
        console.log(n);
    }
    n--;
  }
  console.log('That was kind of a let down');
}
```

```javascript
function getTheRange(arr) {
  let low = arr[0];
  let high = arr[0];
  let range;
  for (let i = 1; i < arr.length; i++) {
    if (low > arr[i]) {
      low = arr[i];
    }

    if (high < arr[i]) {
      high = arr[i];
    }
  }
  return [low, high, high - low];
}
```

## Extra Hard

```javascript
function arrayBuilder(obj) {
  let result = [];
  for (let key in obj) {
    addElementsInArr(result, key, obj[key]);
  }

  function addElementsInArr(arr, el, counter) {
    for (let i = 0; i < counter; i++) {
      arr.push(el);
    }
  }
  return result;
}
```

```javascript
function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  return Math.abs(theMark - player1) < Math.abs(theMark - player2)
    ? 'Player 1 is closest'
    : 'Player 2 is closest';
}
```

```javascript
function disemvowel(string) {
  const vowelsLowerCase = 'aeiou';
  const vowels = vowelsLowerCase
    .split('')
    .concat(vowelsLowerCase.toUpperCase().split(''));
  return string
    .split('')
    .filter((char) => !vowels.includes(char))
    .join('');
}
```

## Fun Part

### We are Illuminati

```javascript
function cipher(secretMessage) {
  const alphabet = ' abcdefghijklmnopqrstuvwz';
  const alphabetAr = alphabet.split('');
  const secretMessageArr = secretMessage.split('');
  const result = secretMessageArr.map((ch) => alphabetAr.indexOf(ch));
  return result;
}
```

```javascript
function decipher(arr) {
  const alphabet = ' abcdefghijklmnopqrstuvwz';
  return arr.reduce((acc, charIndex) => acc + alphabet[charIndex], '');
}
```
