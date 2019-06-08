// String Methods & Concatenation

const firstName = 'Lewis';
const lastName = 'Nozaki';
const str = "Hello there my name is Lewis Nozaki"
const tags = "web design,web development,programming";
let val;

val = firstName + lastName; // 'LewisNozaki'

// Concatenation
val = firstName + ' ' + lastName; // 'Lewis Nozaki'

// Append

val = 'Lewis ';
val += 'Nozaki'; // "Lewis Nozaki"

// Escaping

val = "That\'s awesome, I can\'t wait"; // using a \ in a ' string will not confusing the computer in thinking it is a start/end of a string.

// Length

val = firstName.length;

// concat()

val = firstName.concat(" ", lastName); // "Lewis Nozaki";

// Change case

val = firstName.toUpperCase(); // LEWIS
val = firstName.toLowerCase(); // lewis

// Index

val = firstName.indexOf('L'); // 0
val = firstName.lastIndexOf('w'); // 2

// charAt()

val = firstName.charAt(2); // W

// Get last Char
val = firstName.charAt(firstName.length - 1); // s

// Substring

val = firstName.substring(0, 4); // Lewi

// slice()

val = firstName.slice(0, 4); // Lewi

// split()

val = str.split(' '); // ['hello', 'there', 'my', 'name', 'is', 'Lewis', 'Nozaki']
val = tags.split(',');

// replace()

val = str.replace('Lewis', "Ivy"); //"Hello my name is Ivy Nozaki"

// includes()

val = str.includes('foo'); // false.
val = str.includes('Lewis'); // true.

console.log(val);