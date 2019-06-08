// document.getElementById()

console.log(document.getElementById('task-title'));

// document.getElementByClassName()

console.log(document.getElementsByClassName('card-title'));

// Get things from the element or adding/changing the ID or Class

console.log(document.getElementById('task-title').id);

//let v = document.getElementById('task-title')
//v.id = ; // to change or add ID to 'task-title'
//v.className = ; // to change or add class to 'task-title'

console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'block';

// Change content in an element
taskTitle.textContent = 'YO YO YO';
taskTitle.innerText = 'Bladdy Blah';
taskTitle.innerHTML = '<span style="color:white">Oh Mah Gah</span>';

// document.querySelector() <-- selects only one element as opposed to .querySelectorAll

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

