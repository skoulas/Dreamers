# Objects

- [Objects](#objects)
  - [Easy](#easy)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3](#exercise-3)

## Easy

Each object in the array has two integer properties. The function must return a count of all such objects in array that satisfy .

### Exercise 1

```javascript
const objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  // Add Code below
}
```

### Exercise 2

GreenEnergy ships have fuel type avocado oil
Ships that have disabled property true are remotely disabled.

```javascript
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

function greenEnergy(sp) {
  // add code here
}

function remotelyDisable(sp) {
  // add code here
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
```

### Exercise 3

Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

```javascript
// ADD CODE HERE

const DC = { Bruce: 'Wayne', Harley: 'Quinn' };
const supernatural = {
  Sam: 'Winchester',
  Dean: 'Winchester',
  Waldo: 'unknown',
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
```
