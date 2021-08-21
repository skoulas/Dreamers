# Strings

- [Strings](#strings)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [.join()](#join)
    - [Exercise 1](#exercise-1-1)
  - [Problems](#problems)
    - [Exercise 1](#exercise-1-2)
    - [Exercise 2](#exercise-2-1)
    - [Exercise 3](#exercise-3)

## Exercise 1

```javascript
const tacos = 'i love tacos';
let string = tacos.split(' ');

console.log(string); // should log : ['i', 'love', 'tacos'];
```

## Exercise 2

```javascript
const data = [
  'Gold #FFD700 rgb(255, 215, 0)',
  'Indigo #4B0082 rgb(75, 0, 130)',
  'Chartreuse #7FFF00 rgb(127, 255, 0)',
  'WhiteSmoke #F5F5F5 rgb(245, 245, 245)',
];

const processedData = data.map((item) => item.split(' ', 2));
```

```javascript
let phone = '555-867-5309';
let areaCode;

areaCode = phone.split('-', 1)[0] * 1; // or
areaCode = Number(phone.split('-', 1)[0]);

console.log(areaCode); // should log 555
```

## .join()

### Exercise 1

```javascript
const elements = ['Fire', 'Air', 'Water'];

// Add code below
const elementsBycoma = elements.join(',');
const elementsJoined = elements.join('');
const elementsBy = elements.join('-');
const elementsByCross = elements.join(' + ');

console.log(elementsBycoma); // expected output: "Fire,Air,Water"
console.log(elementsJoined); // expected output: "FireAirWater"
console.log(elementsBy); // expected output: "Fire-Air-Water"
console.log(elementsByCross); // 'Wind + Water + Fire'
```

## Problems

### Exercise 1

[Hacherrank loops](https://www.hackerrank.com/challenges/js10-loops/problem)

```javascript
/**
 *   Print your output using 'console.log()'.
 *
 *   s: consisting of lowercase English alphabetic letters (i.e., a through z)
 *
 **/
function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelArr = [];
  const consonentArr = [];
  const sToArr = s.split('');
  sToArr.forEach((char) =>
    vowels.includes(char) ? vowelArr.push(char) : consonentArr.push(char)
  );

  vowelArr.forEach(consoleCharactersInArray);
  consonentArr.forEach(consoleCharactersInArray);

  function consoleCharactersInArray(char) {
    console.log(char);
  }
}
```

### Exercise 2

[leetcode maximum repeating substring](https://leetcode.com/problems/maximum-repeating-substring)

```javascript
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
function maxRepeating(sequence, word) {
  let result = 0;
  let w = word;
  while (sequence.length >= w.length) {
    if (sequence.includes(w)) {
      result++;
    }
    w += word;
  }
  return result;
}
```

### Exercise 3

"G" as the string "G", "()" as the string "o", and "(al)" as the string "al".

```javascript
/**
 * @param {string} command
 * @return {string}
 */
function interpret(command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
  //return command.split("()").join("o").split("(al)").join("al");
}

// command = "G()()()()(al)"
// returns "Gooooal"
```
