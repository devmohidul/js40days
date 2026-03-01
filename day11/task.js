function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

// Solution 1: 1 and 2 because of closure

function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());

// Solution 2: the output is 100 because the inner function forms a closure

// Solution 3

function createCountingButton() {
  let count = 0;
  const button = document.createElement("button");
  button.textContent = "Click me";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    count++;
    console.log(`Clicked ${count} times`);
    button.textContent = `Count ${count}`;
  });
}

createCountingButton();

// Solution 4:

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// usage:
const double = createMultiplier(2);
const triple = createMultiplier(3);
const timesFive = createMultiplier(5);

console.log(double(4)); // Output: 8
console.log(triple(4)); // Output: 12
console.log(timesFive(4)); // Output: 20

//Solution 5 : The object remains in memory as long as the closure exists

// Solution 6

function myFactory(initialNumber) {
  let number = initialNumber;

  return {
    increment: (newNum) => {
      number = number + newNum;
      console.log(
        "Before Increment:",
        initialNumber,
        "After increment:",
        number,
      );
    },
    decrement: (newNum) => {
      number = number - newNum;
      console.log(
        "Before decrement:",
        initialNumber,
        "After increment:",
        number,
      );
    },
    reset: (newNum) => {
      number = initialNumber;
      console.log("Initial number is:", initialNumber, "After reset:", number);
    },
  };
}

const factory = myFactory(100);
console.log(factory.increment(200));
console.log(factory.decrement(100));
console.log(factory.reset(100));
