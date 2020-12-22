# Date

- [Date](#date)
  - [Understanding the Date object](#understanding-the-date-object)
    - [Ways to create a Date Object](#ways-to-create-a-date-object)
    - [Most used methods](#most-used-methods)
    - [Other Methods](#other-methods)
  - [Exercises](#exercises)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)

## Understanding the Date object

A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time are not the same as the UNIX epoch (the number of seconds that have elapsed since midnight on January 1, 1970, UTC), which is the predominant base value for computer-recorded date and time values.

### Ways to create a Date Object

```javascript
let today = new Date();
let birthday = new Date('December 17, 1995 03:24:00');
let birthday = new Date('1995-12-17T03:24:00');
let birthday = new Date(1995, 11, 17); // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### Most used methods

```javascript
Date.now();
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
```

```javascript
Date.prototype.getFullYear();
// Returns the year (4 digits for 4-digit years) of the specified date according to local time.
```

```javascript
Date.prototype.toJSON();
// Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().
```

```javascript
Date.prototype.toString();
// Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.
```

### Other Methods

```javascript
const d = new Date();
// Creates a new Date object.
```

```javascript
const d = Date.UTC();
// Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
```

```javascript
const t = Date.prototype.getTime();
// Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
```

```javascript
const d = Date.prototype.getDate();
// Returns the day of the month (1–31) for the specified date according to local time.
```

```javascript
const d = Date.prototype.getDay();
// Returns the day of the week (0–6) for the specified date according to local time.
```

```javascript
const h = Date.prototype.getHours();
// Returns the hour (0–23) in the specified date according to local time.
```

```javascript
const m = Date.prototype.getMinutes();
// Returns the minutes (0–59) in the specified date according to local time.
```

```javascript
const s = Date.prototype.getSeconds();
// Returns the seconds (0–59) in the specified date according to local time.
```

```javascript
const m = Date.prototype.getMonth();
// Returns the month (0–11) in the specified date according to local time.
```

```javascript
const y = Date.prototype.getYear();
// Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.
```

```javascript

```

## Exercises

### Exercise 1

To get Date, Month and Year or Time (local time) (time that it runs)

```javascript
// Add code below
console.log(day); //
console.log(month); //
console.log(year); //
```

### Exercise 2

Calculate elapsed time between date1 and date 2 and between date1 and now.

```javascript
const date1 = 'August 17, 1986 03:24:00';
const date2 = 'December 31, 2020 15:24:32';
// Add code below
```
