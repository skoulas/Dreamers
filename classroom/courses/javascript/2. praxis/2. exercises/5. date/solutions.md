# Date

- [Date](#date)
  - [Exercises 1](#exercises-1)
  - [Exercises 2](#exercises-2)
  - [Exercise 3](#exercise-3)

## Exercises 1

```javascript
// Add code below
let [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
```

## Exercises 2

```javascript
const date1 = 'August 17, 1986 03:24:00';
const date2 = 'December 31, 2020 15:24:32';

let start = new Date(date1);
let end = new Date(date2);
let elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
```

## Exercise 3

[hackerrank date problem](https://www.hackerrank.com/challenges/js10-date/problem)

```javascript
/**
 *   Calculates the day of the week.
 *
 *   dateString: a date in MM/DD/YYYY format
 *
 *	Returns the date of the week in the format ex. Sunday
 **/
function getDayName(dateString) {
  let dayName;
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  dayName = daysOfTheWeek[new Date(dateString).getDay()];
  return dayName;
}
```
