# JS Math cheatsheet

- [JS Math cheatsheet](#js-math-cheatsheet)
  - [abs](#abs)
  - [round](#round)
  - [ceil](#ceil)
  - [floor](#floor)
  - [max](#max)
  - [min](#min)
  - [pow](#pow)
  - [sqrt](#sqrt)
  - [random](#random)

## abs

Math.abs(x) — Returns the absolute (positive) value of x

```javascript
Math.abs(25); // 25
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(''); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs('-1'); // 1
Math.abs('string'); // NaN
Math.abs(); // NaN
```

## round

Math.round(x) — The value of x rounded to its nearest integer

```javascript
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(-20.5); // -20
Math.round(-20.51); // -21
```

## ceil

Math.ceil(x) — Value of x rounded up to its nearest integer

```javascript
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0
Math.ceil(-4); // -4
Math.ceil(-7.004); // -7
```

## floor

floor(x) — The value of x rounded down to its nearest integer

```javascript
Math.floor(45.95); //  45
Math.floor(-45.95); // -46
```

## max

max(x,y,z,...,n) — Returns the number with the highest value

```javascript
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

## min

min(x,y,z,...,n) — Same for the number with the lowest value

```javascript
Math.min(10, 20); //  10
Math.min(-10, -20); // -20
Math.min(-10, 20); //  -10
```

## pow

pow(base, exponent) — base to the power of exponent

```javascript
Math.pow(7, 2); // 49
Math.pow(8, 2); // 64
Math.pow(2, 8); // 256
```

## sqrt

sqrt(x) — Square root of x

```javascript
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095
Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
```

## random

random() — Returns a random number between 0 and 1 (include 0 and exclude 1)
