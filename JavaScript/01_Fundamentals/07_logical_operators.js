// LOGICAL OPERATORS

// -> AND &&
// -> OR ||
// -> NOT !
// -> Nullish coalescing ??


// 1. OR ||

// -> OR is used to manipulate boolean values
// -> if any of its arguments is true, it retuns true otherwise false
alert(true || true);    // true
alert(true || false);   // true
alert(false || true);   // true
alert(false || false);  // true



// -> if operand is not boolean, then it's converted into boolean for evaluation
if(1 || 0){
    alert('truthy!');
}


// -> used in an if statement to check if any of the given condition is true
let hours = 12;
let isWeekend = true;
if(hours < 10 || hours > 18 || isWeekend){
    alert("The office is closed");
}


// ** OR finds the first truthy value
// -> evaluates operands from left to right
// -> convert operands to boolean
// -> if result is true, stops and returns original value
// -> if all operands are evaluted (all were false), returns last operand
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder



// 2. AND &&

// -> returs true if both operands are true, false otherwise
alert(true || true);
alert(true || false);
alert(false || true);
alert(false || false);


// -> just like OR, any value is as an operand of AND
if(1 && 0){
    alert("won't work, because the result is falsy");
}   


// -> example with if statement 
let hour = 12;
let minute = 30;

if(hour == 12 && minute == 30){
    alert('The time is 12:30');
}


// ** AND finds the first falsy value

// -> if first operand is truthy, AND returns second operand
alert(1 && 0); // 0
alert(1 && 5); // 5

// -> if first operand is falsy, AND returns it
// -> second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0;



// -> Can pass several values in row
alert( 1 && 2 && null && 3); // null

// -> When all values are truthy, last values is returned 
alert( 1 && 2 && 3 && 4); // 4



// ** Precedence of AND is greater than OR
// -> so, a && b || c && d => (a && b) || (c && d)




// 3. NOT !

// -> convert operands to boolean type 
// -> returns the inverse value

alert( !true ); // false
alert( !0 );    // true


// ** Double NOT !! -> used to convert to boolean type
// a. first not converts values into boolean and returns inverse
// b. second not inverses it again
alert( !!"Non-empty string" ); // true
alert( !!null ); // false




// LOGIN CHECK
let name = prompt("Who's there?");
let password = "TheMaster";

if(name == 'Admin'){
    let key = prompt("Password?");

    if(key == password){
        alert("Welcome!");
    }else if(key == null || key == ''){
        alert("Canceled");
    }else{
        alert("Wrong Password");
    }
}else if(name == null || name == ''){
    alert("Canceled");        
}else{
    alert("I don't know you");
}

