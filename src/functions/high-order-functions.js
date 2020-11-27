// functions that return other functions

function multiplyGenerator(multiplier) {
  console.log('The multiplier is --> ', multiplier);

  function multiplierFunction(numberToMultiply) {
    console.log('The numberToMultiply is --> ', numberToMultiply);
    return multiplier * numberToMultiply;
  }

  return multiplierFunction;
}

const multiplyWithFive = multiplyGenerator(5);

console.log(multiplyWithFive(8));
