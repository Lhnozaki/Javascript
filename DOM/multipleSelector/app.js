// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

// Using .querySelector() & .getElementsByClassName together
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collection into array using "Array.from()"
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);

// Practice

let items = document.querySelector('.collection-item');

let items = document.querySelectorAll('.collection-item');

let items = document.getElementsByClassName('collection-item');

let n = Array.from(items).forEach(function(item){
  console.log(item)
  item.addEventListener('click', show);
})

function show(){
  //console.log('test');
  for(i=0;i<items.length;i++){
    if (items[i].textContent === 'List Item'){
      items[i].textContent = 'It works!';
    }else{
      items[i].textContent = 'List Item';
    }
  }
}

console.log(n);