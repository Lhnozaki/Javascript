//// Event Bubbling (child --> Parent)
// When you add an event listener on an element and then when it is executed, the function will run the events for it's parents.

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

//// Event Delegation (Parent <-- Child)

// Clear Task with 'X' button
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    //console.log('delete item');
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}

// Clear Task Lists Button
let btn = document.querySelector('.clear-tasks').addEventListener('click', dltAll);

function dltAll(){
    //console.log('test');
    let tasks = document.querySelectorAll('.collection-item');
    //console.log(tasks);
    for(i=0;i<tasks.length;i++){
        tasks[i].remove();
    }
}