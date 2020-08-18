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
console.log([1, 2, 3, 4]);

// log an object
console.log({ a: 1, b: 2 });

// log an object formatted as table
console.table({ a: 1, b: 2 });

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

console.clear();

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
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // = -2
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // = 55
val = Math.random(); // = random decimal number
val = Math.floor(Math.random() * 21); // = random number between 0 and 20

console.clear();

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
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(' ');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');

console.clear();

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

// document.body.innerHTML = html;

console.clear();

/************************* 
 * Arrays & Array Meathods
 *************************/

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function (x, y) {
	return x - y;
});

// Reverse sort
val = numbers.sort(function (x, y) {
	return y - x;
});

// Find
function over50(num) {
	return num > 50;
}

val = numbers.find(over50);

console.clear();

/********************
 * Object Literals
 *******************/

const today = new Date();
const person = {
	firstName: 'Steve',
	lastName: 'Smith',
	age: 30,
	email: 'steve@aol.com',
	hobbies: ['music', 'sports'],
	address: {
		city: 'Miami',
		state: 'FL'
	},
	getBirthYear: function () {
		return today.getFullYear() - this.age;
	}
}

// Get a specifiv value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

const people = [
	{ name: 'John', age: 30 },
	{ name: 'Mike', age: 23 },
	{ name: 'Nancy', age: 40 }
]

for (let i = 0; i < people.length; i++) {
	console.log(people[i].name);
}

console.clear();

/************************* 
 * Dates & Times
 *************************/

let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(25);

val = birthday;

console.clear();

/************************************* 
 * IF Statement & Comparison Operators
 *************************************/

const id = 100;

// EQUAL TO
if(id == 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if(id != 101){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id === 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if(id !== 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`);
} else {
  console.log('NO ID');
}

// GREATER OR LESS THAN
if(id <= 100){
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

name = firstName;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');

console.clear();

console.log(val);