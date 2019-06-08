let val;

val = document; // Displays the whole HTML file
val = document.all; // Displays all elements in HTML file
val = document.all[2]; // Displays index of elements
val = document.all.length; // Displays length
val = document.head; // Displays head
val = document.body; // Displays body
val = document.doctype; // Displays document type
val = document.domain; // Displays domain
val = document.URL; // Displays URL
val = document.characterSet; // displays character set
val = document.contentType; // Displays type of doc ex: "text/html"

val = document.forms; // Displays all the forms in HTML
val = document.forms[0]; // Displays the index
val = document.forms[0].id; // Displays the ID
val = document.forms[0].method; // Get or Post
val = document.forms[0].action; 

val = document.links; 
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// Using forEach on a DOM
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);