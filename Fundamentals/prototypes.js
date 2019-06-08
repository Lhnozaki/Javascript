//// Prototypes

//// Person Constructor

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calcAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
  //// Instead of putting this.calcAge function inside of the Person Constructor, we can put inside of the "prototype" of the "Person". That way, when we run console.log, this.calcAge won't appear unless we call it. It hides it. 
}

//// Calculate Age
Person.prototype.calcAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//// Get's Married

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person("john", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "3-20-1978");

console.log(john)
console.log(john.calcAge());
console.log(john.getFullName());

mary.getsMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName")); //true

console.log(mary.hasOwnProperty("first")); //false

Person.prototype.getMessage = () => `Testing...`

console.log(john.getMessage());


//// Prototype inheritence

// 1. Create a constructor
function newPerson(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// 2. Create a "greeting" prototype for the newPerson constructor
newPerson.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

// testing...
const person1 = new newPerson("John", "Doe");
console.log(person1.greeting());

// 3. Create another constructor
function Customer(firstName, lastName, phone, membership) {
  newPerson.call(this, firstName, lastName); 
  //calls back the method in the newPerson constructor.
  //this is the same as using this.firstName = firstName or this.lastName = lastName. This is because the newPerson constructor we previously created already uses those methods. So it's easier to "call" it again. Less code. 

  this.phone = phone;
  this.membership = membership;
}

// 4. Inherit the newPerson prototype methods - This will make it so that whatever prototype we set for newPerson, we can use for Customer, as long as the parameters are the same.

Customer.prototype = Object.create(newPerson.prototype);

// 5. Make Customer.prototype return Customer()

Customer.prototype.constructor = Customer;

// testing...
const cust1 = new Customer("Tom", "Smith", "808-634-1111", "Standard");

console.log(cust1);

Customer.prototype.greeting = function() {
  return `Hello there, ${this.firstName} ${this.lastName}, welcome to our company!`;
}

console.log(cust1.greeting());


// More testing....

newPerson.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

console.log(cust1.getFullName());


//// Object.create()

// Ways to create prototypes for objects without having to create a constructor
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const julie = Object.create(personPrototypes);
julie.firstName = "Julie";
julie.lastName = "Williams";
julie.age = 28;
julie.getsMarried("johnson");

console.log(julie.greeting());
console.log(julie);

// alternative methods
const brad = Object.create(personPrototypes, {
  firstName: {value: "Brad"},
  lastName: {value: "Traversy"},
  age: {value: 38}
});

console.log(brad);
console.log(brad.greeting());
