//// Replacing Elements

// First create the new element, assign an id, and add the desired text
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

// Then declare a variable to grab the old element being replaced
const oldHeading = document.getElementById('task-title');

// Then declare a variable for the "parent" of the replacing element
const cardAction = document.querySelector('.card-action');

// Use the replaceChild() function. <-- element to be added goes in first, the element to replace is second
cardAction.replaceChild(newHeading, oldHeading);

//console.log(newHeading);

//// Removing Elements

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item using the .remove() method
lis[0].remove();
//lis[1].remove();  practice test/example

// removeChild() method

list.removeChild(lis[2]); // same as remove but we are removing by declaring the parent first and using removeChild()

//// Classes and Attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList.add('test');
val = link.classList.remove('test');

//console.log(link);

// Attributes

let num;

num = link.getAttribute('href');
num = link.setAttribute('href', 'http://google.com');
num = link.hasAttribute('href'); // True; test to see whether there is an attribute type; boolean
num = link.removeAttribute() // remove attribute
num = link.setAttribute('title', 'Google'); //add attribute; ex: title = Google


console.log(link);