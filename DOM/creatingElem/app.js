// Creating Elements

const li = document.createElement('li');

// Add Class

li.className = 'collection-item';

// Add ID

li.id = 'New Item';

// Add attribute

li.setAttribute('title', 'New Item');

// Creating a text node 

//li.appendChild(document.createTextNode('Hello World'))
//or alternative

li.innerHTML = 'Hello World'

// Append child to HTML

document.querySelector('ul.collection').appendChild(li);

// const test = document.getElementsByClassName('collection');

// test[0].appendChild(li); <-- if you use getElementsByClassName or quearySelectorAll you must put a bracket [x] to get the index. unlike querySelector. 

// console.log(test);

// const test2 = document.querySelectorAll('ul.collection');
// console.log(test2[0]);

//// Create New Link Element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// console.log(link);
//console.log(li);