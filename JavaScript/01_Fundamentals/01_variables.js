let user = 'John';
let age = 20;
let message = 'Hello';

alert(message);   // shows the variable content

// copy 'Hello world' from message into hello
let hello = message;

alert(message);

hello = 'World';    // value changed

// alert(hello);


//Constant
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // Error, can't reassign the constant


// Uppercase constant (used for hard-coded values)
const COLOR_RED = '#F00';



// TASKS
// 1. Working with variable

let admin, name;
name = "John";
admin = name;
alert(admin);