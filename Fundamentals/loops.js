// Loops

// For Loops

for(i = 0; i < 10; i++){
    if(i === 2){
        console.log('Number 2 is my favorite number.');
        continue; // continues the loop until the condition set in the for loop is met. 
    }

    if (i === 5){
        console.log('Stop the Loop at 5');
        break; // breaks the loop at a specific designated point.
    }
    console.log(i); 
}

// While Loops

let x = 0;

while(x < 10){
    console.log(x);
    x++;
}

// Do-While Loops (Do-While loops run at least once, no matter the circumstance)

let n = 0;

do {
    console.log(n);
    n++;
}

while(n < 10);

// For Loops for Arrays

const cars = ['honda', 'toyota', 'subaru', 'lexus'];

for(i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// For Each -- Displays all elements in the array

const people = ['brett', 'luke', 'vic', 'rina'];

people.forEach(function(peeps, index){
    console.log(peeps); // displays all the elemnts in the array
    console.log(`${index} : ${peeps}`); // displays all elements in the array + their index
});

// Map

const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Mike'},
];

console.log(users);

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

// For In Loops (for Objects)

const list = {
    firstName: 'John',
    lastName: 'Jacobs',
    age: 40,
}

for(let x in list){ 
    console.log(x); //displays the keys (firstName, lastName, age..)
    console.log(list[x]); // displays the properties (John, Jacobs, 40...)
    console.log(`${x} : ${list[x]}`); // displays both the key and properties
}

