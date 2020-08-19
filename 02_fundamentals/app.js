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
if (id == 100) {
	console.log('CORRECT');
} else {
	console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 101) {
	console.log('CORRECT');
} else {
	console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id === 100) {
	console.log('CORRECT');
} else {
	console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id !== 100) {
	console.log('CORRECT');
} else {
	console.log('INCORRECT');
}

// Test if undefined
if (typeof id !== 'undefined') {
	console.log(`The ID is ${id}`);
} else {
	console.log('NO ID');
}

// GREATER OR LESS THAN
if (id <= 100) {
	console.log('CORRECT');
} else {
	console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

if (color === 'red') {
	console.log('Color is red');
} else if (color === 'blue') {
	console.log('Color is blue');
} else {
	console.log('Color is not red or blue');
}

// LOGICAL OPERATORS

// AND &&
if (age > 0 && age < 12) {
	console.log(`${firstName} is a child`);
} else if (age >= 13 && age <= 19) {
	console.log(`${firstName} is a teenager`);
} else {
	console.log(`${firstName} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
	console.log(`${firstName} can not run in race`);
} else {
	console.log(`${firstName} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
	console.log('CORRECT');
else
	console.log('INCORRECT');

if (id === 100)
	console.log('CORRECT');
else
	console.log('INCORRECT');

console.clear();

/************************* 
 * Switches
 *************************/

switch (color) {
	case 'red':
		console.log('Color is red');
		break;
	case 'yellow':
		console.log('Color is yellow');
		break;
	default:
		console.log('Color is not red or yellow');
}

let day;

switch (new Date().getDay()) {
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
}

val = `Today is ${day}`;

console.clear();

/*************************************** 
 * Function Declarations & Expressions
 **************************************/

// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
	// if(typeof firstName === 'undefined'){firstName = 'John'}
	// if(typeof lastName === 'undefined'){lastName = 'Doe'}
	return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESIONS

const square = function (x = 3) {
	return x * x;
};

console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function () {
	console.log('IIFE Ran..');
})();

(function (name) {
	console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS

const todo = {
	add: function () {
		console.log('Add todo..');
	},
	edit: function (id) {
		console.log(`Edit todo ${id}`);
	}
}

todo.delete = function () {
	console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

console.clear();

/******************
 * General Loops
 *****************/

// FOR LOOP
for (let i = 0; i < 10; i++) {
	if (i === 2) {
		console.log('2 is my favourite number');
		continue;
	}

	if (i === 5) {
		console.log('stop the loop');
		break;
	}

	console.log('Number ' + i);
}

// WHILE LOOP
let i = 0;

while (i < 10) {
	console.log('Number ' + i);
	i++;
}

// DO WHILE
do {
	console.log('Number ' + i);
	i++;
}

while (i < 14)

console.clear();

// Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i])
}

// FOREACH LOOP
cars.forEach(function (car, index, array) {
	console.log(`${index} : ${car}`);
});

console.clear();

// MAP
const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Sara' },
	{ id: 3, name: 'Karen' },
	{ id: 4, name: 'Steve' }
]

const ids = users.map(function (user) {
	return user.id;
});

val = ids;

// FOR IN LOOP
const user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 40
}

for (let x in user) {
	console.log(`${x} : ${user[x]}`);
}

console.clear();

/*******************************************
 * WINDOW METHODS / OBJECTS / PROPERTIES
 ******************************************/

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

/***************
 * Block Scope
 **************/

// Global scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
function test() {
	var a = 4;
	let b = 5;
	const c = 6;
	console.log('Function Scope: ', a, b, c);
}

test();

// Block Scope
if (true) {
	var a = 6;
	let b = 5;
	const c = 6;
	console.log('If Scope: ', a, b, c);	
}

for(let a = 0; a < 10; a++) {
	console.log(`Loop ${a}`);
}

console.log('Global Scope: ', a, b, c);

// console.log(val);