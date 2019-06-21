let readline = require('readline-sync');
let as = readline.question('Please give me the first number!');
let o = readline.question('Please give me the operation type!');
let bs = readline.question('Please give me the second number!');
let a = parseInt(as);
let b = parseInt(bs);

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const add = (a, b) => {
  return a + b;
};
const operation = (a, b, o) => {
  return o(a, b);
};
switch (o) {
  case '+':
    console.log(operation(a, b, add));
    break;
  case '-':
    console.log(operation(a, b, sub));
    break;
  case '*':
    console.log(operation(a, b, mult));
    break;
  case '/':
    console.log(operation(a, b, div));
}
