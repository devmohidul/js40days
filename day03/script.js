// Solution 1
let number = 5;
if (number % 2 == 0) {
  console.log("Number is:", number, "and it is an even number");
} else {
  console.log("Number is:", number, "and it is an odd number");
}

// Solution 2
let age = 18;
if (age >= 18) {
  console.log("You are eligible for the driving license");
} else {
  console.log("You have to enough age to get a driving license");
}

// Solution 3
let monthlySalary = 12300;
let annualSalary = 12 * 12300;
let bonus = annualSalary * 0.2;

let CTC = annualSalary + bonus;
console.log("You earn", CTC, "per annualy as CTC");

// Solution 4
let color = "green";
if (color == "red") {
  console.log("You need to STOP");
} else {
  console.log("You need to GO");
}

// Solution 5
let unitCost = 150;
let montlyCost = unitCost * 30;
console.log("Montly Bill:", montlyCost);
let annualCost = 365 * 150;
// After 20% discount for annual payment
let discoutCost = annualCost - annualCost * 0.2;
console.log("Annual bill after 20% discount", discoutCost);

// Solution 6
let year = 2020;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(year, "is leap year");
} else {
  console.log(year, "is not leap year");
}

// Solution 7
let p = 30,
  q = 50,
  r = 20;

if (p > q) {
  if (p > r) {
    console.log("Max number is:", p);
  } else {
    console.log("Max number is:", r);
  }
} else if (q > r) {
  console.log("Max number is:", q);
} else {
  console.log("Max number is:", r);
}

// Solution 8
let count = 5;
// if i make it binary then it will be 00000101 for 5 it i shift left then it will 00001010 whichs is 10
let doubled = count << 1;
console.log("After left shift the number is:", doubled);
