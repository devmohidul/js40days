// Task 1 Solution
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

// output: Bob, because it will access the nearest variable declaration.

// Task 2 soluiton
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

// Mistake: Side effect, due to global decalaration anyone can use it and change it. Debugging will be tough, it should be in function scoped

// Task 3 solution

function parent() {
  let name = "Mohidul";
  function child() {
    console.log(name);
  }
  child();
}

parent();

// Task 4 solution

// Answer: If the variable is declared with "let/CONST" which is blocked scoped then it can't access outside the loop but in case of variable is declared with "var" can be accessed. Because "var" is function scoped.

// Task 5 solution

function outside() {
  var name = "Mahi";
  function inside() {
    console.log(name);
  }
  inside();
}

outside();

// Task 6 solution
// Output: Uncaught ReferenceError: Cannot access 'a' before initialization

// Task 7 Answer: C: It will cause an error.
//  Only inside showAge - This is true about where it's accessible, but the question asks "Where is the age variable accessible?" and then shows code trying to access it outside. So in this case b is false.

// Task 8 answer:

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

// Output: Hi. Because of lexical scoping and scope chain.

// Task 9 answer
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

// Output: Inner. Because of variable scoping and scope chain precedence.

// Task 10 answer

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

// Output: -1, -2. Because of this is a closure. The inner function "remembers" the count variable from its parent scope even after counter() has finished executing.
