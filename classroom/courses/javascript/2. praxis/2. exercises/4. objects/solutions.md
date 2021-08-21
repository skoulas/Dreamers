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
  return objects.reduce(
    (acc, object) => (object.x === object.y ? acc++ : acc),
    0
  );
}
```

### Exercise 2

```javascript
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
};

function greenEnergy(sp) {
  sp['Fuel Type'] = 'avocado oil';
}

function remotelyDisable(sp) {
  sp.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
```

### Exercise 3

```javascript
const findWaldo = (obj) =>
  obj.hasOwnProperty('Waldo') ? obj.Waldo : "Where's Waldo?";
```
