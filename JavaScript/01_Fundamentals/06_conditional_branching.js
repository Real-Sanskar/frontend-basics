

// if statement
let year = prompt('In which year was ECMAScript-2015 specification published?','');
if(year == 2015){
    alert('You are right!');
}



// else clause
let year = prompt('In which year was ECMAScript-2015 specification published?','');
if(year == 2015){
    alert('You are right!');
}else{
    alert('How can you be so wrong?');
}



// SEVERAL CONDITIONS: else if
let year = prompt('In which year was ECMAScript-2015 specification published?','');
if(year < 2015){
    alert('Too early...');
}else if(year > 2015){ 
    alert('Too late');
}else{
    alert('Exactly');
}



// CONDITIONAL OPERATOR '?'
let accessAllowed;
let age = prompt('How old are you?','');

// if(age > 18){
//     accessAllowed = true;
// }else{
//     accessAllowed = false;
// }

// this can be written as
accessAllowed = (age > 18)? true: false;

alert(accessAllowed);   



// MULTIPLE '?'
let Age = prompt('age?',18);

let message = (Age < 3)? 'Hi, baby!':
    (Age < 18)? 'Hello!':
    (Age < 100)? 'Greetings!':
    'What an unusual age!';
alert(message);