console.log('Hello World!');

//------------///

let userName: string;
let userAge = 38;

userName = 'Max';
userAge = 40; // inference

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add('10'); error
add(10, 6) // override
// add(10, '6'); error
