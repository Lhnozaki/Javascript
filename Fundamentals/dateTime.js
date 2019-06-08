// Date and Time


const today = new Date(); // Current date and time
const birthday = new Date('7-1-1990 11:25:00'); // set a custom date and time
const newDate = new Date('september 01 1990');
const newDate2 = new Date('06/05/2007');

let val; 

val = today;
val = today.toString(); // change date to string, if needed
val = birthday;
val = newDate;
val = newDate2;
val = today.getMonth(); // 1 or feb (zero based index)
val = today.getDate(); // 9 or current day. not zero based index
val = today.getDay(); // numerical value of curent day starting at sunday = 0
val = today.getFullYear(); // current year
val = today.getMinutes();  // current minute
val = today.getSeconds(); // current second
val = today.getMilliseconds(); // current millisecond
val = today.getTime(); // amount of seconds that passed since 01/01/1970

birthday.setMonth(2); // changes the month that is set in value "birthday"
birthday.setDate(12); // changes the day that is set in value "birthday" 
birthday.setFullYear(1996);// changes the year that is set in value "birthday"
birthday.setHours(3); // changes the hour that is set in value "birthday"
birthday.setMinutes(39); // changes the minute that is set in value "birthday"
birthday.setSeconds(25); // changes the second that is set in value "birthday"

console.log(val);
console.log(birthday);




