const reader = require('readline-sync');
const name = reader.question('Your name?');

function sayHi() {
  console.log(`Hello, ${name}. Nice to meet you.`);
}

sayHi();
