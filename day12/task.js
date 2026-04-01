const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

/* 
Output: Not provided
Explain: Nullish coalescing operator only checks "null" or "undefined". Since user.age is set to undefined so the output is show right hand value
*/

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

/*
Output: 1
Explain: Object.freeze makes any object immutable. We can't modify any properties of frozen object.
*/

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

/* Output */
const {
  name,
  company,
  company: {
    location: { city: addressCity },
  },
} = person;

console.log(name, company, addressCity);

/* Output */
const student = {
  name: "Mohidul Hasan",
  age: 34,
  grades: [85, 92, 78, 86, 65],

  calculateAverage() {
    if (this.grades.length == 0) return 0;

    const sum = this.grades.reduce((total, grade) => total + grade, 0);

    return sum / this.grades.length;
  },
};

console.log(`Average: ${student.calculateAverage().toFixed(2)}`);

/* Book Store Inventory System */
const bookStore = {
  books: [
    { id: 1, title: "The great gatsby", author: "F. Scoot", quantity: 5 },
    { id: 2, title: "1984", author: "George Orwell", quantity: 3 },
    {
      id: 3,
      title: "To kill a mockingbard  ",
      author: "Herper Lee",
      quantity: 0,
    },
    { id: 4, title: "pride and prejudice", author: "Jane Austen", quantity: 7 },
  ],

  checkAvailability(title) {
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase(),
    );

    if (!book) {
      console.log(`Book ${title} not found in the inventory`);
      return;
    }

    if (book.quantity > 0) {
      console.log(
        `${book.title} is available. ${book.quantity} copy/copies in stock`,
      );
    } else {
      console.log(`${book.title} is currently out of stock`);
    }
  },

  restock(title, quantity) {
    const book = this.books.find(
      (book) => book.title.toLowerCase().trim() === title.toLowerCase().trim(),
    );

    if (!book) {
      console.log(`${title} not found in the inventory list and can't restock`);
      return;
    }

    if (quantity <= 0) {
      console.log(`Invalid quantity, please enter a positive number`);
      return;
    }

    book.quantity += quantity;
    console.log(
      `${book.title} restock successfull. New quantity: ${book.quantity}`,
    );
  },
};

console.log("\n=== Availability Checking ===");
bookStore.checkAvailability("1985");

console.log("\n=== Restocking ===");
bookStore.restock("1984", 5);

/* Difference between object.key() and object.entries() */

//Both methods are extract information from object but with different format.

//object.keys() => returns an array of properties names(keys) only
//object.entries() => returns an array of [key value] pairs

// Example
const profile = {
  name: "Mohidul",
  age: 34,
  country: "Bangladesh",
};

console.log(Object.keys(profile)); //return arrray with only keys
console.log(Object.entries(profile)); // returns arry with key value pairs

/* How do you check if an object has a certain property?
Answer: There are several ways like: in operator, hasOwnProperty() method, Object.hasOwn(), optional chaining etc.
*/

// What will be the output and why?

const mperson = { name: "John" };
const newPerson = mperson;
newPerson.name = "Doe";
console.log(mperson.name);

// Output: Doe, because object in JavaScript are reference types, not primitives values.

//What’s the best way to deeply copy a nested object? Expalin with examples
/* Answer: It may be structuredClone() or spread operator with recursive function. Examples are: */

const original = {
  name: "Mohidul Hasan",
  age: 34,
  address: {
    city: "Dhaka",
    thana: "Khilkhet",
    zip: 1229,
  },
};

const deepCopy = structuredClone(original);

console.log(original.name);
console.log(original.age);
console.log(`\n`);
console.log(deepCopy.name);
console.log(deepCopy.age);

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

users.forEach(({ name, address, age }) => {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
});

console.log(`\n`);

for (const { name = "Unknown", address = "Unknown", age = 0 } of users) {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}
