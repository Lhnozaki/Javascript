//// ES6 Classes

// different way to create an object.

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName =  lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calcAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  //// Stateic Methods
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

console.log(mary);
console.log(mary.greeting());
console.log(mary.calcAge());
console.log(Person.addNumbers(1, 2));


//// Sub Classes

// Extending; a "sub-class" of Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);  //calls parent class constructor 
    
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return `$50.00`;
  }
}

const john = new Customer("John", "Smuth", "555-555-5555", "Standard");

console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());