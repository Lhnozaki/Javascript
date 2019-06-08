// Traversing the DOM

let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Node List

val = list.childNodes; //a text node is from the line break.
val = list.childNodes[1]; // <li>
val = list.childNodes[1].nodeName; // LI
val = list.childNodes[1].nodeType; // 1 (Element)

// type of nodes

// 1. - Element
// 2. - Attribute (deprecated)
// 3. - Text Node
// 8. - Comment
// 9. - Document (itself)
// 10. - Doctype

// Get Children Element nodes || HTML Collection

val = list.children; // displays elements only
val = list.children[1]; // <li>
list.children[1].textContent = 'hello'; // an example of how to select a specific child and make changes to it, like adding a text

// Children of Children 

list.children[3].children[0].id = "test"; // ex of adding an "id" to a child of a child
val = list.children[3].children[0]; // gets the child of the child

val = list.firstChild; // gets first child of "list" val.

val = list.firstElementChild // gets fist child thats an element inside of the "list" val 

val = list.lastChild; // gets last child

val = list.lastElementChild; // gets last child thats an element

val = list.childElementCount; // displays the number of children inside of the "list" val

// Get Parent Node

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Siblings

val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val);