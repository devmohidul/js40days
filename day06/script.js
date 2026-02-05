console.log("Day 06");

// Declare/Define a function
function printThis() {
  console.log("Printing....");
}

// call/invoke a function
printThis();

// Function as a expression
let printMe = function () {
  console.log("Print me......");
};

printMe();

// Function parameter and argument
function sum(a, b) {
  let sum = a + b;
  console.log("Summation is:", sum);
}
sum(10, 5);

// function with return
function summation(a = 0, b = 0) {
  let result = a + b;
  return result;
}
let result = summation(10, 5);
console.log("Summation is:", result);

// rest parameter

function calc(a, b, ...rest) {
  console.log(a, b, rest);
}

calc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Arrow Function
let greetMe = () => {
  console.log("Hello Arrow function");
};
greetMe();

// IIFE(Immediately invoked function expression)
(function (count) {
  console.log("IIFE", count);
})(5);
