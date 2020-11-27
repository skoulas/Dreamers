// JavaScript functions behave like any other data type in the language;
// we can assign functions to variables, and we can reassign them to new variables.
function sayHi(message) {
  console.log('Coming from sayHi? ' + message);
}

const geiaSou = sayHi;
const sageHallo = geiaSou;

sageHallo('  Hallo  ');
sayHi('Geia Sou');
geiaSou(' Hi ');

console.log(geiaSou);
