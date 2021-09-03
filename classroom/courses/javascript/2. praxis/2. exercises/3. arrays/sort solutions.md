# Arrays - SORT

- [Arrays - SORT](#arrays---sort)
  - [1. Sort an Array of Strings](#1-sort-an-array-of-strings)
    - [a. Ascending (A to Z):](#a-ascending-a-to-z)
    - [b. Descending (Z to A):](#b-descending-z-to-a)
  - [2. Case-insensitive Sort an Array of Strings](#2-case-insensitive-sort-an-array-of-strings)
    - [a. Ascending (aA to zZ):](#a-ascending-aa-to-zz)
    - [b. Descending (zZ to aA):](#b-descending-zz-to-aa)
  - [3. Sort an Array of Numbers](#3-sort-an-array-of-numbers)
    - [a. Ascending:](#a-ascending)
    - [b. Descending:](#b-descending)
  - [4. Sort an Array of Date Strings](#4-sort-an-array-of-date-strings)
    - [a. Ascending:](#a-ascending-1)
    - [b. Descending:](#b-descending-1)
  - [5. Sort an Array except for one Element](#5-sort-an-array-except-for-one-element)
    - [a. Ascending:](#a-ascending-2)
    - [b. Descending:](#b-descending-2)
  - [6. Sort Array of Objects by Property Value](#6-sort-array-of-objects-by-property-value)
    - [a. Ascending:](#a-ascending-3)
    - [b. Descending:](#b-descending-3)
  - [7. Sort Array of Objects by Multiple Property values](#7-sort-array-of-objects-by-multiple-property-values)
    - [a. Ascending:](#a-ascending-4)
    - [b. Descending:](#b-descending-4)

## 1. Sort an Array of Strings

### a. Ascending (A to Z):

We can sort a simple array of strings using a functionless array sort() method like this:

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below
fruits.sort();    // 👈 default sort

console.log( fruits );
// ["Apples", "Bananas", "Cherries", "Watermelon"]
// A → B → C → W

```

### b. Descending (Z to A):

To sort the array of strings in descending order we can use String [localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) method like this:

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below
fruits.sort((a, b) => b.localeCompare(a));

console.log( fruits );
// ["Watermelon", "Cherries", "Bananas", "Apples"]
// W → C → B → A
```

## 2. Case-insensitive Sort an Array of Strings

Issue:
Let us first see what happens when we do a default sort for an array containing both lowercase and uppercase string elements.

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];
fruits.sort();

console.log( fruits );
// ["Apples", "Bananas", "Watermelon", "cherries"]
// A → B → W → c
```

As you can see above output, with default sorting word Watermelon starting with a uppercase W is coming before cherries starting with a lowercase c. This happens because `strings are sorted according to each character's Unicode code point value`. Using string [charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) we can get the UTF-16 code unit for each character and then see that:

```javascript
'C'.charCodeAt()   // 67
'W'.charCodeAt()   // 87
'c'.charCodeAt()   // 99

// 67 < 87 < 99
// C → W → c
```

### a. Ascending (aA to zZ):

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log( fruits );
// ["Apples", "Bananas", "cherries", "Watermelon"]
// A → B → c → W
```

or

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
fruits.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

console.log( fruits );
// ["Apples", "Bananas", "cherries", "Watermelon"]
```

### b. Descending (zZ to aA):

For case-insensitive sorting of array of strings in descending order we can simply interchange a & b element in the sorting compare function like this:

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
fruits.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

console.log( fruits );
// ["Watermelon", "cherries", "Bananas", "Apples"]
// W → c → B → A
```

or

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
fruits.sort((a, b) => b.localeCompare(a, 'en', { sensitivity: 'base' }));

console.log( fruits );
// ["Watermelon", "cherries", "Bananas", "Apples"]
```

## 3. Sort an Array of Numbers

Issue:

```javascript
let numbers = [4, 2, 5, 1, 3, 10];
numbers.sort();    // 👈 default sort

console.log( numbers );
//  [1, 10, 2, 3, 4, 5]
```

In the above example, we can see that if we use a default sort on the numbers array we are getting an incorrect output as 10 is coming before 2 when it should be at the last position. This happens because `array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order`. Thus in a numeric sort, 2 should come before 10, but because numbers are converted to strings, "10" comes before "2" in the Unicode order.

### a. Ascending:

We can sort an array of numbers in ascending order using a simple compare function like this

```javascript
let numbers = [4, 2, 5, 1, 3, 10];

// Solution below
numbers.sort((a, b) => a - b);   // 👈 compare function, simply return a - b

console.log( numbers );
// [1, 2, 3, 4, 5, 10]
```

### b. Descending:

To sort an array of numbers in descending order we can simply interchange a & b elements in the sorting compare function like this:

```javascript
let numbers = [4, 2, 5, 1, 3, 10];

// Solution below
numbers.sort((a, b) => b - a);   // 👈 interchange `a` & `b` and return b - a

console.log( numbers );
// [10, 5, 4, 3, 2, 1]
```

## 4. Sort an Array of Date Strings

Issue:

```javascript
// Date string in YYYY-MM-D format
let dates = [
  '2021-08-1',
  '2021-08-4',
  '2021-08-10',
  '2021-08-2'
];
dates.sort()    // 👈 default sort

console.log( dates )
// ["2021-08-1", "2021-08-10", "2021-08-2", "2021-08-4"]
```

In the above example, we can see that the date string "2021-08-10" is coming before "2021-08-2" which is not the expected output. It happens because of the same reason when sorting number array, where we found that 10 was coming before 2 when using default sorting.

### a. Ascending:

To properly sort an array of date strings we can create a Date object by passing the date string to a new Date() inside the compare function like this:

```javascript
let dates = [ '2021-08-1', '2021-08-4', '2021-08-10', '2021-08-2' ];

// Solution below
dates.sort((a, b) => new Date(a) - new Date(b))  // 👈 using `Date` constructor here

console.log( dates )
// ["2021-08-1", "2021-08-2", "2021-08-4", "2021-08-10"]
```

### b. Descending:

For descending order we can simply interchange a & b elements in the sorting compare function like this:

```javascript
let dates = [ '2021-08-1', '2021-08-4', '2021-08-10', '2021-08-2' ];

// Solution below
dates.sort((a, b) => new Date(b) - new Date(a))  // 👈  here

console.log( dates )
// ["2021-08-10", "2021-08-4", "2021-08-2", "2021-08-1"]
```

## 5. Sort an Array except for one Element

Let say we have a simple array like this

```javascript
let fruits = ['Select', 'Apples', 'Watermelon', 'Bananas', 'Cherries'];
```

and we want to sort all elements in this array, except "Select"
no matter if we are sorting the array in ascending/descending order we should always have "Select" at the first position.

### a. Ascending:

We can do this in ascending order by adding a little bit of extra logic to the sort compare function like this:

```javascript
let fruits = ['Select', 'Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below
fruits.sort((a, b) => {

  // If the first element value is "Select",
  // then keep it before second element. a < b
  if (a === 'Select') return -1;

  // If second element value is "Select",
  // then keep it before first element. a > b
  if (b === 'Select') return 1;

  // Else default sorting of string
  return a.localeCompare(b);
});

console.log( fruits )
// ["Select", "Apples", "Bananas", "Cherries", "Watermelon"]
// ↑ "Select" is at the first position and rest of the element is sorted
```

### b. Descending:

For descending order logic we just need to interchange a & b for the localeCompare logic and we get the desired output.

```javascript
let fruits = ['Select', 'Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below
fruits.sort((a, b) => {
  if (a === 'Select') return -1;
  if (b === 'Select') return 1;

  return b.localeCompare(a);  // 👈 interchange `a` & `b` here
});

console.log( fruits )
// ["Select", "Watermelon", "Cherries", "Bananas", "Apples"]
// ↑ "Select" is still at the first position and rest of the element is sorted
```

## 6. Sort Array of Objects by Property Value

### a. Ascending:

We can sort an array of objects by a property value like this:

```javascript
let inventory = [
  {name: 'Bananas', quantity: 5},
  {name: 'Apples',  quantity: 10},
  {name: 'Grapes',  quantity: 2}
];

// Solution below
// Sort by the "quantity" property value
inventory.sort((a, b) => a.quantity - b.quantity);  // 👈 here

console.log( inventory )
// Output
/*
[
  { "name": "Grapes",  "quantity": 2 },
  { "name": "Bananas", "quantity": 5 },
  { "name": "Apples",  "quantity": 10 }
]
*/
```

### b. Descending:

For descending order logic we just need to interchange a & b in the sort compare function like:

```javascript
let inventory = [
  {name: 'Bananas', quantity: 5},
  {name: 'Apples',  quantity: 10},
  {name: 'Grapes',  quantity: 2}
];

// Solution below
// Sort by the "quantity" property value
inventory.sort((a, b) => b.quantity - a.quantity);  // 👈 interchange `a` & `b` here

console.log( inventory )
// Output
/*
[
  { "name": "Apples",  "quantity": 10 },
  { "name": "Bananas", "quantity": 5 },
  { "name": "Grapes",  "quantity": 2 }
]
*/
```

## 7. Sort Array of Objects by Multiple Property values

Our requirement is:

First, we need to sort the name property values in ascending order.
Then, we need to sort the quantity property values in ascending order.
So, we are looking for output like:

name	quantity	color
Apples	4	Red
Apples	6	Yellow
Apples	10	Green
Bananas	5	Yellow
Grapes	2	Green

### a. Ascending:

```javascript
let inventory = [
  {name:"Bananas", color:"Yellow", quantity:5},
  {name:"Apples", color:"Red", quantity:4},
  {name:"Apples", color:"Green", quantity:10},
  {name:"Grapes", color:"Green", quantity:2},
  {name:"Apples", color:"Yellow", quantity:6}
];

// Solution below
// Sort by the "name" property value, then by "quantity"
inventory.sort((a, b) => {
  let compareNames = a.name.localeCompare(b.name);
  let compareQuantity = a.quantity - b.quantity;

  // First compare using names
  // If values for "name" porperty for both a & b is same,
  // then compare by "quantity" property value
  return compareNames || compareQuantity;
})
```
Or, we can also write this in a one-line like:

```javascript
let inventory = [
  {name:"Bananas", color:"Yellow", quantity:5},
  {name:"Apples", color:"Red", quantity:4},
  {name:"Apples", color:"Green", quantity:10},
  {name:"Grapes", color:"Green", quantity:2},
  {name:"Apples", color:"Yellow", quantity:6}
];

// Solution below
inventory.sort((a, b) => a.name.localeCompare(b.name) || a.quantity - b.quantity);
```

### b. Descending:

Let say our requirement is now something like:

First, we need to sort the name property values in ascending order.
Then, we need to sort the quantity property values in descending order.

```javascript
let inventory = [
  {name:"Bananas", color:"Yellow", quantity:5},
  {name:"Apples", color:"Red", quantity:4},
  {name:"Apples", color:"Green", quantity:10},
  {name:"Grapes", color:"Green", quantity:2},
  {name:"Apples", color:"Yellow", quantity:6}
];

// Solution below
// Sort by the "name" property value, then by "quantity" descending order
inventory.sort((a, b) => {
  let compareNames = a.name.localeCompare(b.name);
  let compareQuantity = b.quantity - a.quantity;  // 👈 interchange `a` & `b` here

  // First compare using names
  // If values for "name" porperty for both a & b is same,
  // then compare by "quantity" property value
  return compareNames || compareQuantity;
})
```

```javascript
let inventory = [
  {name:"Bananas", color:"Yellow", quantity:5},
  {name:"Apples", color:"Red", quantity:4},
  {name:"Apples", color:"Green", quantity:10},
  {name:"Grapes", color:"Green", quantity:2},
  {name:"Apples", color:"Yellow", quantity:6}
];

// Solution below
inventory.sort((a, b) => a.name.localeCompare(b.name) || b.quantity - a.quantity);
```