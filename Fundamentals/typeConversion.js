// Type Conversion

let val = 5;

// Number to String

val = String(5);
val = String(4+4);

// Boolean to String

val = String(true);

// Date to String;

val = String(new Date());

// Array to String

val = String([1,2,3,4]);

// toString() Method

val = (5).toString();
val = (true).toString();

// String to Number

val = Number('5'); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('Hello'); // NaN
val = Number([1,2,3,4]); // NaN

// parseInt() Method

val = parseInt('100.30'); // 100
val = parseFloat('100.30'); // 100.3

// Type Coercion

const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // "56"
console.log(typeof sum); //"string"