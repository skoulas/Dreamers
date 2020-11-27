const example1 = [5, 7, 6];

example1.push(8, 9, 10); // adds 8, 9, 10
example1.pop(); // removes last here is 10

example1[0] = 1; // instead of 5 is 1

example1.forEach((element, i) => {
  console.log(element, i);
});

// Challenge 1
// Given a list ['A', 'B', 'C']; write commands so the list becomes ['A', 'D', 'C']

// Challenge 2
// Na ginetai console me Result --> 1os einai Fotis, 2os einai Alexandra kok
const people = ['Fotis', 'Alexandra', 'Giannis', 'Aggelos', 'Georgios'];
console.log(people);

// Challenge 3 - Manage Inventory

/*
  1. Your company is launching 3 new products:
  toilet paper, bottled water, and sanitizer. Store them in a list.
  2. Turns out there was a mistake and toilet paper was actually paper towels.
  Make the appropriate update.
  3. Sanitizer sells out. Remove it from the list.
  4. Business is so good the company launches a new product: Bleach. Add it to the list.
    Note: After creating the initial array do not just create a brand new array.
    Modify it accordingly.
*/
