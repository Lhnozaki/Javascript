//// ES5 Constructors & "This" Keyword

//// Creating a new "Constructor"
function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calcAge = function() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  //console.log(this);
}

const lewis = new Person("lewis", 28, "07/01/1990");
//const john = new Person("john", 30);

// console.log(lewis);
// console.log(john);
// console.log(lewis.name);
// console.log(lewis.age);

console.log(lewis.calcAge());

//// Built-in Constructors

//// Strings
const name1 = "jeff";
const name2 = new String("Jeff");

console.log(name1); //string
console.log(name2); //object

//// Number

const num1 = 5;
const num2 = new Number(5);

console.log(num1);
console.log(num2); //object

//// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(bool2); //object

//// Array

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);

//// Regular Expression

const re1 = /\w+/;
const re2 = new RegExp(`\\w+`);

console.log(re1);
console.log(re2);

//// Arrow functions don't work with "this" keywords