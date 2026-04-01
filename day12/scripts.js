// let car = prompt("Which is your favourite car");

// let favCar = {
//   [car]: 5,
// };

// console.log(favCar);

// function Car(name, model) {
//   this.name = name;
//   this.model = model;
// }

// let myCar = new Car("BMW", "X1B2");
// console.log(myCar);

let profile = {
  name: "Mohidul",
  company: "HISP BD",
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "Dhaka",
    thana: "Khilkhet",
  },
};

console.log(profile.name);
console.log(profile.company);
console.log(profile.message());
console.log(profile.address.city);

for (let key in profile) {
  console.log(key, profile[key]);
}

let target = { p: 1, a: 2 };
let source = { a: 5, b: 6 };

let returnedObj = Object.assign(target, source);
console.log(returnedObj);
