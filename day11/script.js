console.log("Day 11 - Closure in JS");

function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const func = outer();
console.log(func());

// Count with closure

function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  };
}

const retVal = outerCount();
retVal();
retVal();
retVal();

// Another example of closure

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited", amount, "Current Amount", balance);
    },
    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insufficient balance");
      } else {
        balance = balance - amount;
        console.log("Withdrawn", amount, "Current Amount", balance);
      }
    },

    checkBalance: () => console.log("Current balance", balance),
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(300));
console.log(myAccount.withdraw(200));
console.log(myAccount.checkBalance());
