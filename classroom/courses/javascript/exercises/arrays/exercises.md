# Arrays

- [Arrays](#arrays)
  - [Easy](#easy)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
  - [Hard](#hard)
    - [Exercise 1](#exercise-1-1)
    - [Exercise 2](#exercise-2-1)

## Easy

### Exercise 1

Input: nums = [1,2,3,4]
Output: [1,3,6,10]

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  // ADD CODE HERE
}
```

### Exercise 2

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth

```javascript
/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  // Add code below
}
```

## Hard

### Exercise 1

Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

```javascript
const fb = [];
// ADD CODE HERE

}
```

### Exercise 2

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
