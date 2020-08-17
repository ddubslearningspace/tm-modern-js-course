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

// clear the console
console.clear();

// measure the time to execute some directions 
console.time('Hello');
  console.log('1');
  console.log('2');
  console.log('3');
  console.log('4');
console.timeEnd('Hello');