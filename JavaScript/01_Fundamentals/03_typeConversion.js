// || TYPE CONVERSIONS ||

// 1. STRING CONVERSION
let value = true;
alert(typeof value);    // boolean

value = String(value);  // now value is a string "true"
alert(typeof value);    // string


// 2. NUMBERIC CONVERSION
alert("6" / "2");   // 3, strings implicitly converted to numbers

// can be done explictly using Number(value) function
let str = "123";
alert(typeof str);  // string

let num = Number(str);  // becomes a number 123
alert(typeof num);  // number

// ** If string is not valid number -> result of conversion is NaN
let age = Number("an arbitrary string instead of number");
alert(age); // NaN, conversion failed

// ** Conversion rules
alert( Number("   123   ") );   // 123
alert( Number("123z") );    // NaN
alert( Number(true) );  // 1
alert( Number(false) ); // 0
alert( Number(null) );  // 0
alert( Number(undefined) ); // NaN


// 3. BOOLEAN CONVERSION
alert( Boolean(1) );  // true
alert( Boolean(0) );    //false

alert( Boolean("Hello") );  // true
alert( Boolean("") );   // spaces, also true (any non-empty string is true)