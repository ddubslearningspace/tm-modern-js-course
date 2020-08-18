/************************* 
 * Using the console
 *************************/ 

// log a string
console.log('Hello World');

// log a number
console.log(123);

// log a boolean
console.log(true);

// log a variable
var greeting = 'Hello';
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

/**************************** 
 * Data types and conversion
 ****************************/ 

// Variable types
let valVariable = 'Can change.';
const valConstant = 'Can not change.'; 

// Type conversion
val = String(5);
val = Number('555');
val = parseInt('100.03');
val = parseFloat('100.03');

/**************************** 
 * Numbers & The Math Object
 ****************************/ 

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

/************************* 
 * String Methods
 *************************/ 

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad.';

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length; 

// concat()
val = firstName.concat(' ', lastName);

// Chage case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// indexOf
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt(2);

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');

/************************* 
 * Template Literals
 ************************/

const job = 'Web Developer';
const city = 'Miami';
let html;

function hello() {
  return 'hello';
}

// Without templete literals (es5)
html = '<ul><li>Name: ' + firstName + ' </li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// With template literals (es6)
html = `
  <ul>
  <li>Name: ${firstName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

document.body.innerHTML = html;
console.log(val);