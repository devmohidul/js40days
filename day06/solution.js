console.log("Day 06");
// Solution 1 (Celcius to farenheit)
let c = 37,
  f;
function convert(c) {
  f = (c * 9) / 5 + 32;
  console.log(f);
}

convert(c);

// Solution 2(Maximum of 2 numbers)

let findMax = (num1, num2) => {
  if (num1 > num2) {
    console.log("Max number is:", num1);
  } else {
    console.log("Max number is:", num2);
  }
};

findMax(20, -35);

// Solution 3(Palindrome)
let isPalindrome = (str) => {
  for (let left = 0, right = str.length - 1; left < right; left++, right--) {
    if (str[left] !== str[right]) {
      console.log(`"${str}" is NOT a palindrome`);
      return false;
    }
  }
  console.log(`"${str}" IS a palindrome`);
  return true;
};

isPalindrome("racecar");

// Solution 4(Factorial)
let result = 1;
let factorial = (n) => {
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
};
factorial(5);

// Solution 5(Count Vowel)

let countVowels = (str) => {
  let vowel = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowel++;
    }
  }
  console.log("Total Vowel is:", vowel);
  return vowel;
};

countVowels("mohidul");

// Solution 6(Capitalize first letter)
let capitalizeWords = (sentence) => {
  let result = "";
  result += sentence[0].toUpperCase();
  for (let i = 1; i < sentence.length; i++) {
    if (sentence[i - 1] === " ") {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i];
    }
  }
  console.log(result);
};

capitalizeWords("my name is mohidul");

//Solution 7 IIFE

((secondWord) => {
  console.log("Hello, " + secondWord + "!");
})("javaScript");

// Solution 8 callback function

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback(name);
}

greet("Mohidul", function (name) {
  console.log(`Have a good day ${name}`);
});

// Solution 9
