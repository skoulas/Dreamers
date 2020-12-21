# Strings

- [Strings](#strings)
  - [.split()](#split)
    - [Understanding .split()](#understanding-split)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3](#exercise-3)
  - [.join()](#join)
    - [Exercise 1](#exercise-1-1)

## .split()

### Understanding .split()

It is a built-in method for breaking up a string into multiple parts, based on the character(s) that you define. This is the format for .split() is as follows:

```javascript
'string to split'.split('character[s]_to_split_by', numTimesToSplit);
```

The parts that make up a valid .split() method are:

- The string, or variable that references a string to be split. Required.
- A character or string to use as the point of reference on where to split the string. Required.
- A positive integer of the number of splits to make, after which .split() will stop evaluating the string. Optional.

Using the format above, if I wanted to split the string "I love tacos!" so that each word is its own string, I can do the following.

.split() can break strings into smaller parts, but here are some additional things to keep in mind.

- You can split by more than one character
- The character[s] to split by are case sensitive
- Using .split() does not modify the original string
- .split() can be used together with other built-in methods like .join()

### Exercise 1

split the string "I love tacos!" so that each word is its own string.

```javascript
const tacos = 'i love tacos';
// Add code below

console.log(string); // should log : ['i', 'love', 'tacos'];
```

### Exercise 2

Let’s say I had copy and pasted some HTML colors names, to use in an app I’m building. Each row contains the named color, it’s hex and rgb values. Picking a few samples, and putting each row as it’s own array item, we have something that looks like the below data.

I would like to process the above and create an output like

```javascript
const data = [
  'Gold #FFD700 rgb(255, 215, 0)',
  'Indigo #4B0082 rgb(75, 0, 130)',
  'Chartreuse #7FFF00 rgb(127, 255, 0)',
  'WhiteSmoke #F5F5F5 rgb(245, 245, 245)',
];

// write your code below

const processedData[0] = ['Gold', '#FFD700']; // first line
```

### Exercise 3

Let’s say we have a bunch of phone numbers as strings and we want to assign the area code to its own variable. If our phone numbers are formatted like "555-867-5309", i would like to get the 555 part.

```javascript
let phone = '555-867-5309';
let areaCode;
// Add code below

console.log(areaCode); // should log 555 (number)
```

## .join()

### Exercise 1

```javascript
const elements = ['Fire', 'Air', 'Water'];

// Add code below

console.log(elementsBycoma); // expected output: "Fire,Air,Water"
console.log(elementsJoined); // expected output: "FireAirWater"
console.log(elementsBy); // expected output: "Fire-Air-Water"
console.log(elementsByCross); // 'Wind + Water + Fire'
```
