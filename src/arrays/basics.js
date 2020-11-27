const example1 = [5, 7, 6];

example1.push(8, 9, 10); // adds 8, 9, 10
example1.pop(); // removes last here is 10

example1[0] = 1; // instead of 5 is 1

example1.forEach((element) => {
  console.log(element);
});

console.log(example1);

// Todo
// Na ginetai console me Result --> 1os einai Fotis, 2os einai Alexandra ...
const people = ['Fotis', 'Alexandra', 'Giannis', 'Aggelos', 'Georgios'];
