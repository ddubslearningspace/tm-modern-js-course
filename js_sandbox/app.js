// log a string
console.log('Hello World');

// log a number
console.log(123);

// log a boolean
console.log(true);

// log a variable
var greeting = "Hello";
console.log(greeting);

// log reference type of variable
console.log(typeof greeting);

// log an array
console.log([1,2,3,4]);

// log an object
console.log({a:1, b:2});

// log an object formatted as table
console.table({a:1, b:2});

// show a console error
console.error('This is an error.');

// show console warning
console.warn('This is a warning.');

// measure the time to execute some directions 
console.time('Hello');
  console.log('1');
  console.log('2');
  console.log('3');
  console.log('4');
console.timeEnd('Hello');

// clear the console
console.clear();

// Variable types
let val = "Can change.";
const valConstant = "Can not change."; 

// Type conversion
val = String(5);
val = Number("555");
val = parseInt('100.03');
val = parseFloat('100.03');

// Simple Math
const num1 = 100;
const num2 = 50;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;         // = 3.14...
val = Math.round(2.8); // = 3
val = Math.ceil(2.4);  // = 3
val = Math.floor(2.9); // = 2
val = Math.sqrt(64);   // = 8
val = Math.abs(-3);    // = 3
val = Math.pow(8, 2);  // = 64
val = Math.min(2,33,4,1,55,6,3,-2); // = -2
val = Math.max(2,33,4,1,55,6,3,-2); // = 55
val = Math.random(); // = random decimal number
val = Math.floor(Math.random() * 21); // = random number between 0 and 20

console.log(val);