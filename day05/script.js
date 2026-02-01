console.log("Day 05");
// For Loop
for (let i = 1; i <= 5; i++) {
  console.log(`This loop count ${i} times`);
}

// Sum of event number between 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Summation of 1 to 100 is:", sum);

// Sum of even number between 1 to 100
let sum1 = 0;
for (let j = 0; j <= 100; j++) {
  if (j % 2 === 0) {
    sum1 = sum1 + j;
  }
}
console.log("Summation of 1 to 100 even number is:", sum1);

// Identify all the characters of a word
let language = "JavaScript";

for (let l = 0; l < language.length; l++) {
  console.log(`Char of the ${l} position is:`, language.charAt(l));
}

// Nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// Break and continue
for (let i = 1; i <= 5; i++) {
  if (i == 4) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) continue;
  console.log(i);
}

//multiple counters using single for loop
for (i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

console.log("New Pyramid");

// Stars of pyramid
for (let i = 1; i <= 5; i++) {
  console.log("* ".repeat(i));
}

// Solution 1

// stars of pyramid

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Solution 2
let n = 5;
for (i = n; i <= n; i++) {
  console.log(`Multipication table of ${n} is:`);
  for (j = 1; j <= 10; j++) {
    console.log(`${n}*${j}=`, i * j);
  }
}

// Solution 3
let sum2 = 0;
for (let j = 0; j <= 500; j++) {
  if (j % 2 !== 0) {
    sum2 = sum2 + j;
  }
}
console.log("Summation of 1 to 500 odd number is:", sum2);

// Solution 4

console.log("Numbers are which skips multiple of 3:");
for (i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}

// Solution 5
let num = 6789,
  reversed = 0;

while (num > 0) {
  lastDigit = num % 10;
  reversed = reversed * 10 + lastDigit;
  num = Math.floor(num / 10);
}
console.log(reversed);

// Solution 6, Understanding of my own about while, do-while, for
// While
// 1. Entry controlled loop
// 2. It executes zero or more times
// 3. First condition checking then executes condition
// 4. Use when number of iteration is unknown

// do-while
// 1. Exit controlled loop
// 2. It executes one or more times
// 3. At first executes the code and may increment/decrement operand then condition checking
// 4. Use when code must run at least one

// for loop
// 1. Also an entry controlled loop
// 2. all condition in one line (initialization, condition, update)
// 3. It also executes zero or more times
