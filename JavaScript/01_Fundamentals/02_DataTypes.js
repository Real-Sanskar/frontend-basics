// DATA TYPES (8 types)

// Primitive = number, bigint, string, boolean, null, undefined, symbol
// Non-primitive = object

// 1. NUMBER TYPE
let n = 123;
n = 12.345;

// ** Special numeric values : Infinity, -Infinity, NaN

alert(1/0);  // Infinity

alert(-Infinity);  // -Infinity

alert("Not a number" / 2);  // NaN, such divisions is erroneous

// NaN is sticky, further mathematical operations on NaN returns NaN
alert(NaN + 1);    
alert(3 * NaN);

// One exception: (NaN**0 is 1) 
alert(NaN**0);

// "number" type can only represent values in range: ±(2^53 - 1)
// Above this, "approximate" value may be stored
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 4);

// BigInt -> integers of arbitrary length
// Created by appending n at the end
const bigInt = 1234567890123456789012345678901234567890n;




// 2. STRING

// 3 types of quotes: 
let str = "Hello";
let str2 = 'Single quotes are ok too'
let phrase = `can embed another ${str}`; // backticks

alert(phrase);

let name = "John";

// embed a variable
alert(`Hello, ${name}`); // Hello, John

// embed an expression
alert(`result is ${1+2}`); // result is 3

// **NOTE** : Only backticks have embed functionality
alert("result is ${1+2}");      // result is ${1+2}



// 3. BOOLEAN TYPE
let nameFieldChecked = true;  // yes, age field is checked
let ageFieldChecked = false;  // no, age field is not checked

let isGreater = 4 > 1;
alert(isGreater);

// 4. NULL VALUE
let age = null;
// null is not a “reference to a non-existing object” or a “null pointer”
// just a speical value which represents "nothing", "empty" or "value unknown"



// 5. Undefined value

// meaning of undefinded -> "value is not assigned"
// if a variable is declared, but not assigned, then its value is undefined
let gender;
alert(gender);



// 6. Objects and symbols

// i. objects -> objects are used to store collection of data and more complex entities 
// ii. symbols -> used to create unique identifiers for objects



// 7. typeof operator
// return type of operand

typeof undefined; // "undefined"""
typeof 0;  // "number"
typeof 10n;  // "bigint"
typeof true;  // "boolean"
typeof "hello";  // "string"
typeof Symbol("id");  // "symbol"
typeof Math;  // "object"
typeof null;  // "object"  error of typeof -> "opearator"
typeof alert;  // "function" 



// Summary:

// There are 8 basic data types in JavaScript.

// Seven primitive data types:
//      number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
//      bigint for integer numbers of arbitrary length.
//      string for strings. A string may have zero or more characters, there’s no separate single-character type.
//      boolean for true/false.
//      null for unknown values – a standalone type that has a single value null.
//      undefined for unassigned values – a standalone type that has a single value undefined.
//      symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.