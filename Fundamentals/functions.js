//// Functions

function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet("Lewis", "Nozaki"));

//// Function Expressions

const square = function(x){
    return x*x
};

console.log(square(8));

let first = 'John';
let last = 'Doe';
let sent = `Hello ${first} ${last}.`;

// Immediate Invokable Function Expressions - IIFEs

(function(){
    console.log(`Hello ${first}`);
})();

(function(name){
    console.log('Hello '+ name);
})('Brad');

// Property Methods: Functions in objects.

const toDo = {
    add: function(){
        console.log('Test');
    },
    edit: function(id){
        console.log(`Test ${id}`);
    },
}

toDo.add();
toDo.edit(25);

toDo.delete = function(){
    console.log('Test Delete');
}

toDo.delete();
console.log(toDo);

// Arrow functions

const calcArea = (radius) => {
    return 3.14 * radius**2;
};

console.log(`The area is: ${calcArea(5)}`);

// if there is only one parameter inside the arrow function, you do not need to place parenthases. if there are mutliple parameters or none, then you will need to place the parentases.

const calcArea2 = radius => {
    return 3.14 * radius**2;
};

console.log(`The area is: ${calcArea2(10)}`);

// if there is only one return value, on one line, we can remove the "return" keyword and the curly braces and move the line of code up next to the arrow:

const calcArea3 = radius => 3.14 * radius**2;

console.log(`The area is: ${calcArea3(7)}`);

// Callback Functions - When a function is passed through another function and then is invoked. 

const myFunction = (callBackFunction) => {
    let value = 50;
    callBackFunction(value);
};

myFunction(function(value){
    console.log(value);
});

// Another Example...

let students = [
{name: "Mary", score: 90, school: "East"},
{name: "James", score: 100, school: "East"},
{name: "Steve", score: 40, school: "East"},
{name: "Gabe", score: 90, school: "West"},
{name: "Rachel", score: 85, school: "East"},
{name: "Tina", score: 95, school: "West"},
{name: "Lynette", score: 75, school: "East"}
];

function showEast(data, callBackFunction) {
    for (i = 0; i<data.length; i++){
        if (data[i].school === "East"){
            if (typeof callBackFunction === "function") {
                callBackFunction(data[i]);
            }
        }
    }
}

showEast(students, function(obj) {
    if (obj.score > 60){
        console.log(`${obj.name} has passed!`);
    }
});

function determineTotal() {
    let total = 0;
    let count = 0;
    showEast(students, function(obj) {
        total = total + obj.score;
        count++;
    });
    console.log(`Total score is: ${total}. And the total number of students in East are: ${count}`);
}

determineTotal();