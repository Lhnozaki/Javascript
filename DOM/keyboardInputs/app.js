//// Keyboard Inputs / Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//form.addEventListener('submit', runEvent);
taskInput.addEventListener('keydown', runEvent);

// Key Down 'keydown'
// Key Up 'keyup'
// Key Press 'keypress'
// Focus 'focus' <-- when you click inside of the input
// Blur 'blur' <-- when you click out of the input
// Cut 'cut' <-- displays when you ctrl X or 'cut' text inside the input
// Paste 'paste' <-- displays when you paste text into input.
// Input 'input' <-- anything to do with inputs.
// Change 'change' <-- Only used for Select Lists in HTML.

taskInput.value = '';

function runEvent(e){
    //e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    //heading.innerText = e.target.value;
    //console.log(taskInput.value); // Get Input Value
    //taskInput.value = ''; // Clear input
}