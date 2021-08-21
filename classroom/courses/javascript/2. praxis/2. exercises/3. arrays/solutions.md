# Arrays

- [Arrays](#arrays)
  - [Easy](#easy)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
  - [Hard](#hard)
    - [Two Sum](#two-sum)
    - [Exercise 1](#exercise-1-1)
    - [Exercise 2](#exercise-2-1)

## Easy

### Exercise 1

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums) {
  let sum;
  return nums.map(sumup);

  function sumup(num) {
    sum = num + sum;
    return sum;
  }
}
```

### Exercise 2

[richest customer wealth](https://leetcode.com/problems/richest-customer-wealth)

```javascript
/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth(accounts) {
  return accounts
    .map((account) => account.reduce((acc, money) => acc + money))
    .reduce((acc, sum) => (acc > sum ? acc : sum));
}
```

## Hard

### Two Sum

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    secondIndex = nums.indexOf(diff, i + 1);
    if (secondIndex !== -1) {
      firstIndex = i;
      break;
    }
  }

  return [firstIndex, secondIndex];
}

// Input: (nums = [2, 7, 11, 15]), (target = 9);
// Output: [0, 1];
```

### Exercise 1

```javascript
const fb = [];

for (let i = 1; i <= 16; i++) {
  let pushItem =
    !(i % 3) && !(i % 5)
      ? 'fizzbuzz'
      : !(i % 5)
      ? 'buzz'
      : !(i % 3)
      ? 'fizz'
      : i;

  fb.push(pushItem);
}
```

### Exercise 2

```javascript
function holidays(arr) {
  return arr.includes('October') ? 'Happy Halloween' : 'Have a great day!';
}

const months = ['April', 'May', 'June', 'October'];
const animals = ['Cats', 'Dogs', 'Pigs'];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"
```
