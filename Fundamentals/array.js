// Array Methods

const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);
const arr3 = ['apple', 'banana', 'orange', 'coconut'];
const arr4 = ['green', true, undefined, null, {a:1, b:2}, new Date(), 777];
const arr5 = [49,50,51,52,53,345];

let val;
let val2;
let val3;
let val4;

// Get array length

val = arr1.length // 5

// Check if is array

val = Array.isArray(arr1); // true

// Get index value;

val = arr3[3]; // coconut

// replace into array

arr1[0] = 100 // [100,2,3,4,5]

// Find index of array

val = arr1[3]; // 4

// ----- Mutating Arrays -----

// Add on to end

arr1.push(300); // [100,2,3,4,5,300];

// Add on to front

arr1.unshift(1); // [1,100,2,3,4,5,300]

// Take off from end

arr1.pop() //  [1,100,2,3,4,5];

// Take off from front

arr1.shift(); //  [100,2,3,4,5];

// Splice values

arr1.splice(1, 3); // [100, 5]; removes from index 1 which is 2, and removes 3 indexes which is 2, 3, 4.

// Reversing

arr3.reverse(); //["coconut", "orange", "banana", "apple"]

// Concat

val = arr1.concat(arr2); // [100, 5, 1, 2, 3, 4, 5]

// Sorting

val2 = val.sort(); //  [1, 100, 2, 3, 4, 5, 5]; Orders the values numberical but only by first digit.

//Using the Compare Method to sort numerically

val2.sort(function(x , y){              // [1,2,3,4,5,5,100]
    return x - y;
})

// Reverse sort using Compare Method


val2.sort(function(x, y){              // [100,5,5,4,3,2,1]
    return y - x;
})

// Find

function under50(num){
    return num < 50;
}

val3 = arr5.find(under50); // 49

function over100(num){
    return num > 100
}

val4 = arr5.find(over100); // 345

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(val);
console.log(val2);
console.log(val3);
console.log(val4);