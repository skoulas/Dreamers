console.log(typeof 'fotis');
console.log(typeof 6);
console.log(typeof 42n); // (new in ECMAScript 2020)
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
// use Array.isArray or Object.prototype.toString.call
console.log(typeof ['manousos']);
console.log(typeof { name: 'kitsos' });
console.log(typeof function () {});
console.log(typeof class C {});
console.log(typeof Symbol('foo')); // (new in ECMAScript 2015)

// The following are confusing, dangerous, and wasteful. Avoid them.
// typeof new Boolean(true) === 'object';
// typeof new Number(1) === 'object';
// typeof new String('abc') === 'object';
