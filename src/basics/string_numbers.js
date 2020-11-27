let text = "7.77";
let arithmos = 7.77;


// A numerical text multiplied by number is converted to number
const p = text * 1;
console.log('Type of text' + typeof text);
console.log('Type of text multiplied with 1' + typeof p);
// parseInt converts an integer string to number
// parseFloat converts a float string to number
const x = parseFloat(text);
console.log('Type of text after parseFloat ' + typeof x);

// A number added with a string is converted to string
const r = arithmos + "";
console.log("Type of arithmos " + typeof arithmos);
console.log("Type of arithmos after adding an empty string " + typeof r);

// parseInt returns the first number it encounters
let example1 = parseInt("33 World 22");
console.log(example1);

// toFixed returns a string with as many decimal points as the argument it takes
let example2 = (200.123456).toFixed(3);
console.log(example2);
console.log(typeof example2);
