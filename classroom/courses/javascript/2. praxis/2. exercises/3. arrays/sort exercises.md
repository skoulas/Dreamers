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

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below

```

### b. Descending (Z to A):

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below

```

## 2. Case-insensitive Sort an Array of Strings

### a. Ascending (aA to zZ):

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
```

### b. Descending (zZ to aA):

```javascript
let fruits = ['Apples', 'Watermelon', 'Bananas', 'cherries'];

// Solution below
```

## 3. Sort an Array of Numbers

### a. Ascending:

```javascript
let numbers = [4, 2, 5, 1, 3, 10];

// Solution below
```

### b. Descending:

```javascript
let numbers = [4, 2, 5, 1, 3, 10];

// Solution below
```

## 4. Sort an Array of Date Strings

### a. Ascending:

```javascript
let dates = [ '2021-08-1', '2021-08-4', '2021-08-10', '2021-08-2' ];

// Solution below
```

### b. Descending:

```javascript
let dates = [ '2021-08-1', '2021-08-4', '2021-08-10', '2021-08-2' ];

// Solution below
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
```

### b. Descending:

```javascript
let fruits = ['Select', 'Apples', 'Watermelon', 'Bananas', 'Cherries'];

// Solution below
```

## 6. Sort Array of Objects by Property Value

### a. Ascending:

```javascript
let inventory = [
  {name: 'Bananas', quantity: 5},
  {name: 'Apples',  quantity: 10},
  {name: 'Grapes',  quantity: 2}
];

// Solution below
```

### b. Descending:

```javascript
let inventory = [
  {name: 'Bananas', quantity: 5},
  {name: 'Apples',  quantity: 10},
  {name: 'Grapes',  quantity: 2}
];

// Solution below
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
```

```javascript


```