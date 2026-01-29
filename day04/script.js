// Solution 1
/* Output will be "It's a normal day." because day vaiable assigned with Capitalized word but switch case condition has been declared with lowercase letter. So default condition will be executed  */

let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// Solution 2
let withdrawAmount = 200;
if (withdrawAmount % 100 == 0) {
  console.log("Withdraw Successful");
} else {
  console.log("Invalid amount");
}

// Solution 3
let operator = "",
  p = 12,
  q = 10;

switch (operator) {
  case "+":
    console.log("Addition of these 2 number is:", p + q);
    break;
  case "-":
    console.log("Subtraction of these 2 number is:", p - q);
    break;
  case "/":
    console.log("Division of these 2 number is:", p / q);
    break;
  case "%":
    console.log("Remainder of these 2 number is:", p % q);
    break;
  default:
    console.log("Invalid operator");
    break; // Though it is optional but i have added here for best practice
}

// Solution 4

let age = 25;

switch (true) {
  case age < 18:
    console.log("Your ticket price is $3 because you are a child");
    break;
  case age >= 18 && age <= 60:
    console.log("Your ticket price is $10 because you are an adult person");
    break;
  case age > 60:
    console.log("Your ticket price is $8 because you are a senior person");
    break;
  default:
    console.log("Invalid age");
    break;
}

// Solution 4 using ternary operator
let age1 = 25;
let price = age1 < 18 ? 3 : age <= 60 ? 10 : 8;
console.log(`Your ticket price is: $${price}`);

// Solution 5
let month = "may";
switch (month) {
  case "january":
    console.log("Aquarius");
    break;
  case "february":
    console.log("Pisces");
    break;
  case "march":
    console.log("Aries");
    break;
  case "april":
    console.log("Taurus");
    break;
  case "may":
    console.log("Gemini");
    break;
  case "june":
    console.log("Cancer");
    break;
  case "july":
    console.log("Leo");
    break;
  case "august":
    console.log("Virgo");
    break;
  case "september":
    console.log("Libra");
    break;
  case "october":
    console.log("Scorpio");
    break;
  case "november":
    console.log("Sagittarius");
    break;
  case "december":
    console.log("Capricorn");
    break;
}

// Solution 6
let side1 = 5,
  side2 = 6;
side3 = 7;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
