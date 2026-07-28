// TYPES OF OPEARTORS

// 1. Unary Negation (single operand)
let x = 2;
x = -x;
alert(x);  // -1, unary negation applied

// 2. Binary minus (2 operands)
let z = 1, y = 3;
alert(y - z); // 2, binary minus subtracts value


// ** MATHS OPERATORS 
// -> Addition + 
// -> Subtraction -
// -> Multiplication *
// -> Division /
// -> Remainder %
// -> Exponentiation **

// ** Reaminder % -> gives remainder of integer division
alert(5 % 2);  // 1
alert(8 % 3);  // 2

// Exponentation ** -> raises a to the power b
alert(2 ** 2); // 4
alert(2 ** 3); // 6

alert(4 ** (1/2)) // Square root
alert(8 ** (1/3)) // Cube root



// 3. String concatenation with binary + 
let s = "Hello" + "World";
alert(s); // HelloWorld

// if only 1 operand is string, other one is implicitly converted to string
alert('1' + 2); // "12"
alert(2 + '1'); // "21"


// -> More complex example

// + operator is read from left -> right
alert(2 + 2 + '1'); // 2 + 2 = 4 -> 4 + '1' = "41", NOT "221"
alert('1' + 2 + 2); // '1' + 2 = "12" -> "12" + 2 = 122, NOt "41"


// ** Other arithmetic operators (-, *, /) only works with number
// converts operands to numbers
alert(6 - '2'); // 4, converts 2 to number
alert('6' / '2'); // 3, converts both operands to number


// ** Unary + converts operands to numbers
alert(+true); // 1
alert( +""); // 0

let apple = "2";
let oranges = "3";
alert( +apple + +oranges); // 5  (used for type conversion)

// longer variant
// alert( Number(apple) + Number(oranges));   



// ** Modify-in-place -> shortend operators 
let n = 2;
n += 5; // 7, (same as n = n + 5)
n *= 2; // 14, (same as n = n* 2)
alert(n);

// such operators have same precedence as assignment operator -> they run after other calculations
let x = 2;
x *= 3 + 5; // right part evaluated first, same as x *= 8
alert(x); // 16



// ** Increament/ Decreament
let counter = 4;
// let a = counter++;   // 4, postfix increament -> increase counter but returns old value
// let a = ++counter;   // 5, prefix increament -> increase counter and returns new value
// let a = counter--;   // 4, postfix decreament -> decrease counter but returns old value
let a = --counter;      // 3, prefix decreament -> decrease counter and returns new value

alert(a);



// ** bitwise operatorS
// -> AND(&)
// -> OR(|)
// -> XOR(^)
// -> NOT(~)
// -> LEFT SHIFT (<<)
// -> RIGHT SHIFT (>>)
// -> ZERO-FILL RIGHT SHIFT (>>>)



// comma -> allows to evaluate several expressions, divided with comma. Result of last one is returned
let b = (1 + 2, 3 + 4);
alert(b);
