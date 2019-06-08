// Template Literals

const name = 'Lewis Nozaki';
const age = 28;
const job = "Web Developer";
const city = "Honolulu";
let html;

// Without template Strings (es5) The OLD way.

html = '<ul><li>Name:' + name + '</li><li>age:' + age + '</li><li>Job:' + job + '</li><li>City:' + city + '</li></ul>';

// or we can type it like this..

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>';

// Template String or Literals (es6)

function Hello(){
    return "Hello";
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Number: ${2+2}</li>
        <li> ${Hello()}</li>
        <li> ${age > 30 ? 'Over 30 ' : 'Under 30'}</li>
    </ul>
`

document.body.innerHTML = html;

