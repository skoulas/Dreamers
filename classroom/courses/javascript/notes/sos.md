# SOS

## Introduction

A constant variable must have an assignment otherwise throws

```javascript
const johannes;
      ^^^^^^^^

SyntaxError: Missing initializer in const declaration
```

typeof null

```javascript
// This stands since the beginning of JavaScript
typeof null === 'object';
```

In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" typeof return value. (reference)

A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.

The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. You can chain many ternary operators for example...

```javascript
let day = 'Saturday';
const result =
  day === 'Saturday'
    ? ' it is Saturday '
    : day === 'Friday'
    ? 'its friday'
    : 'it is not Saturday or Friday';

// results in it is Saturday
```

Be carefull ... no command is executed after return!!!!

```javascript
const isPersonAdult1 = (age) => {
  if (age > 17) {
    return true;
  }
  return false;
};

const isPersonAdult2 = (age) => {
  let result;
  if (age > 17) {
    result = true;
  }
  result = false;

  return result;
};

console.log(isPersonAdult(16), isPersonAdult(18)); // false , true
console.log(isPersonAdult2(16), isPersonAdult2(18)); // false, false
```

## Scope
