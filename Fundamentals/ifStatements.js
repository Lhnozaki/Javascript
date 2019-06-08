// If Statements and Comparisons

const num = 100;
const num2 = "200"
const num3 = 300

// Strictly equal and strictly not equal

if (num === 101){               // false
    console.log("true");
}else{
    console.log('false')
}

if (num !== 101){               // true
    console.log("true");
}else{
    console.log('false')
}

// Test to see if a variable is either a string, num, undefined, null, etc..

if (typeof num2 !== "undefined"){
    console.log(`The ID is ${num2}`);
}else{
    console.log(`No ID`);
}

// <, >, =

if (num3 > 101){               // true
    console.log("true");
}else{
    console.log('false')
}

if (num3 < 101){               // false
    console.log("true");
}else{
    console.log('false')
}

if (num3 >= 300){               // true
    console.log("true");
}else{
    console.log('false')
}

// If, Else If, Else

const color = 'yellow';

if (color === 'red'){           // The color is neither red nor blue
    console.log('The color is red');
}else if (color === "blue"){
    console.log('The Color is blue');
}else{
    console.log('The color is neither red nor blue');
}

// && and ||

let name = 'kenji';
let age = '28';

if(age > 21 && age < 50){       // Kenji is an adult
    console.log(`${name} is an adult`);
}else if(age > 13 && age < 18){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is a child`);
}

if(age < 16 || age > 65){       // Kenji is running in the race!
    console.log(`${name} cannot run in the race`);
}else{
    console.log(`${name} is running in the race!`);
}

// Ternary Operator
// The ternary Operator is a fast and shorthand way of doing the if/else statements. Start with the logic. If num = 100, "num === 100", input a "?" for the "if", then input the return for a true statement, then input ":" for the else and then input the return for the false statement. Example below:

console.log(num === 100 ? 'true' : 'false'); // true

// If/Else statements don't need curly braces. They will work fine without them in JavaScript. But, it is recommended to use the braces for better streamline and cleanliness. 