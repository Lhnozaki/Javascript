//// Local & Session Storage

// Set local storage item

localStorage.setItem('name', 'john');
localStorage.setItem('age', '30');

// Set session storage item

sessionStorage.setItem('name', 'beth');

// remove from storage

//localStorage.removeItem('name');

// get data from storage

const name = localStorage.getItem('name');
console.log(name);

// Clear local storage

// localStorage.clear()

//// add a single from a form to local or session storage
// document.querySelector('form').addEventListener('submit', function(e){
//   //console.log(123);
//   const task = document.getElementById('task').value; //whatever value is typed inside of the 'task' id.
//   //console.log(task)
//   localStorage.setItem('task', task);
//   e.preventDefault();
// })



//// add multiple values from the same form into local or session storage
document.querySelector('form').addEventListener('submit', function(e){
  //console.log(123);
  const task = document.getElementById('task').value; //whatever value is typed inside of the 'task' id.
  //console.log(task)

  let tasksArray;

  if(localStorage.getItem('tasks') === null){
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
  }

  tasksArray.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasksArray));

  //alert('Task Saved');
  e.preventDefault();
})


//// Console.log() all of the values with the same key in local or session storage
const toDo = JSON.parse(localStorage.getItem('tasks'));

//console.log(toDo);

toDo.forEach(function(things){
  console.log(things)
});