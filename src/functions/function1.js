(function() {
  // JavaScript functions behave like any other data type in the language;
  // we can assign functions to variables, and we can reassign them to new variables.

  function sayHi(message) {
    // console.log("Coming from sayHi? " + message);
  }

  sayHi("Hi");

  const geiaSou = sayHi;

  geiaSou("Geia Sou");

  function multiplyGenerator(multiplier) {
    console.log("The multiplier is --> ", multiplier);
    function multiplierFunction(numberToMultiply) {
      console.log("The numberToMultiply is --> ", numberToMultiply);
      return multiplier * numberToMultiply;
    }

    return multiplierFunction;
  }

  const multiplyWithFive = multiplyGenerator(5);

  console.log(multiplyWithFive(8));


})();