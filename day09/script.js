test();

function test() {
  // 1st example
  try {
    console.log(name); // ReferenceError
  } catch (error) {
    console.log("Error: cann't access 'name' in TDZ");
  }

  let name = "Mohidul"; // TDZ for name ends here
  console.log("After declaration, You name is:", name); // It Works

  // 2nd example
  try {
    console.log(address); //ReferenceError
  } catch (error) {
    console.log("Error: cann't access 'address' in TDZ");
  }

  let address = "Dhaka"; //TDZ for address ends here
  console.log("After declaration, you address is: ", address); // It works

  // 3rd example
  try {
    console.log(hobby); // ReferenceError
  } catch (error) {
    console.log("Error: you cann't access 'hobby' in TDZ");
  }

  let hobby = "Coding"; // TDZ for hobby ends here
  console.log("After declaration, you hobby is: ", hobby); // It works
}

// Solution of question 2
// Variable hoisting

console.log("Before declaration: ", language); // undefined (not error)
var language = "JS";
console.log("After declaration: ", language); // JS

try {
  console.log(lang); // ReferenceError: Cannot access before initialization
} catch (error) {
  console.log(lang);
}

let lang = "JavaScript";

// Function Hoisting
one();

function one() {
  console.log("You are in function one");
  two();
}

function two() {
  console.log("You are in function two");
}
