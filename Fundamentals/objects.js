// Object Literals

const person = {
    firstName: 'Lewis',
    lastName: 'Nozaki',
    age: 28,
    email: 'nozaki@gmail.com',
    hobbies: ['music', 'martial arts'],
    address: {
        city: 'Honolulu',
        state: 'Hawaii',
    },
    getBirthYear: function(){
        return 2019 - this.age; // Use the "this." method to target the person.age
        //return 1990;
    }
}

let val;

val = person; // person object
val = person.firstName; // Lewis
val = person['lastName']; // Nozaki
val = person.age; // 28
val = person.hobbies; // ['music', 'martial arts']
val = person.hobbies[1]; // Martial Arts
val = person.address.state; // Hawaii
val = person.address['city']; // Honolulu
val = person.getBirthYear(); // 1990

console.log(val);

const people = [
    {name: 'John', age: "30"},
    {name: 'Mike', age: "45"},
    {name: 'Dave', age: "16"},
    {name: 'Sean', age: "22"},
]

for (i=0;i<people.length;i++){
    console.log(people[i].name);
    console.log(people[i].age);
}

//// Combining objects

const obj1 = {
  firstName: "Lewis",
  lastName: "Nozaki",
  address: "500 Ala Moana"
}

const obj2 = {
  course1: 80,
  course2: 75,
  course3: null,
  course4: null,
  course5: null
}

const obj3 = {
  tries: 6,
  member: true
}

const newObj = {...obj1, ...obj2, ...obj3};

console.log(newObj);