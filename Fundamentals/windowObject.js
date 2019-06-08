// Window Methods / Objects / Properties

console.log(123);

// Alerts

alert('Hello World'); // Alert pop-up on live website

// Prompt

let input = prompt();

alert(input); // Displays an alter of the prompt

//Confirm

if(confirm('Are you sure?')){
    console.log('Yes');
    } else {
    console.log('No');
};

// Outer Height & Width

let val;

val = window.outerHeight; // Displays outer height
val = window.outerWidth; // Displays outer width

// Inner Height & Width

val = window.innerHeight; // Displays inner height
val = window.innerWidth; // Displays innder width

// Scroll

val = window.scrollY; // pixel of scroll bar vert
val = window.scrollX; // pixel of scroll bar horiz

// Location Object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect

window.location.href = 'http://google.com' // can be external or internal site
window.location.reload(); 

// History Object

window.history.go(); // displays history. you can put a number parameter in the ().
val = window.history.length;

// Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;

//console.log(val);