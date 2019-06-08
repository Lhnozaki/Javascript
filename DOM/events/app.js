//// Events

document.querySelector('.collection-item').addEventListener('click', function(e){
    console.log('Hello world');

    e.preventDefault(); //stops the behavior of the event
});

//// Alternative (naming the function)
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    //console.log('clicked');
    e.preventDefault();
    let val;
    val = e;
    // Event targeting

    val = e.target; // displays where the event is attached
    val = e.target.id; // displays the id's (if any)
    val = e.target.className; // displays classes
    val = e.target.classList; // displays classes as lists
    
    e.target.innerText = 'Hello'; // changes the text inside target (which is the button in this case).

    // Event Type

    val = e.type; // displays the type of event (ex: 'click')

    // Timestamp

    val = e.timeStamp; // displays timestamp of event

    // Coordinates of event relative to Window

    val = e.clientY; // Vertical
    val = e.clientX; // Horizontal

    // Coordinates of event relative to element

    val = e.offsetY; // Vertical
    val = e.offsetX; // Horizontal

    console.log(val);
}