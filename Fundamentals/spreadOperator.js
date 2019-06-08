//// Spread Operators

// Combining Array Elements

const arr1 = ["apple", "banana", "orange"];

const arr2 = ["Tomato", "Broccoli", "Carrot", ...arr1]; //add arr1 to arr2

const arr3 = [...arr1, ...arr2]; // brand new array

console.log(arr2);

// Combining Object Elements

const obj1 = {
  firstName: "Lewis",
  lastName: "Nozaki",
  gender: "male"
}

const obj2 = {
  age: 28,
  height: 5.10,
  weight: 205,
}

const obj3 = {...obj1, ...obj2};

console.log(obj3);

// Passing elements of an array as parameters in a function

function addThreeNumbers(x,y,z) {
  let sum = x + y + z;
  console.log(sum);
}

const parameters = [2, 5, 8]; //if there are more elements in an array, the spread operator will only pull the number of parameters in the function/

addThreeNumbers(...parameters);


// testing... "map()" array method. Just for fun. 

let numbers = [1,2,3,4];

console.log(numbers.map(function(x) {
  return 10*x;
})
);

//Example of "rest" operator

function multiply(multiplier, ...newParameter) {
  return newParameter.map(function(element) {
    return multiplier * element;
  })
}

let arr7 = [1,2,3,4,5,6,7,8,9];

let yup = multiply(9, ...arr7);

console.log(yup);