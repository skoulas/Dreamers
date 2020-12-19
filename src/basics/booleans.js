function runBooleans() {
  const example1 = false;
  const example2 = true;
  const example3 = null;
  const example4 = undefined;
  const example5 = '';
  const example6 = NaN;
  const example7 = -5;
  const example8 = 0;

  console.log(Boolean(example1));
  console.log(Boolean(example2));
  console.log(Boolean(example3));
  console.log(Boolean(example4));
  console.log(Boolean(example5));
  console.log(Boolean(example6));
  console.log(Boolean(example7));
  console.log(Boolean(example8));
}

function greet(name) {
  if (name) {
    console.log(`You have given me the name ${name} bravo`);
  } else {
    console.log('Please give me a name');
  }
}

runBooleans();
greet('Fotis');
greet('');
