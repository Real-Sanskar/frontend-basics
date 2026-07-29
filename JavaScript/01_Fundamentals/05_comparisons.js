// || COMPARISIONS ||

// comparisons returns a boolean value:
// -> true - means yes, correct or the truth
// -> falss - means no, incorrect or not the truth

alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true



// STRING COMPARISONS 
// strings are compared using "dictonary" or "lexicographical" order
// strings are compared letter by letter

alert('Z' > 'A'); // true
alert('Glow' > 'Glee'); // true
alert('Bee' > 'Be'); // true
alert('A' > 'a'); // false
// ** characters are compared according to index of Unicode.. 'A' and 'a' are different



// COMPARISONS OF DIFFERENT TYPES

// ** while comparing different values, js converts values into numbers
alert('2' > 1); // true
alert('01' == 1); // true

alert(true == 1); // true
alert(false == 0); // true


// it is possible at the same time:
// -> 2 numbers are equal
// -> one of them is true as boolean and other is false as boolean

let a = 0;
alert( Boolean(a)); // false
let b = "0";
alert( Boolean(b)); // true

alert(a == b); // true
// ** equality check (==) converts values using Numeric conversions ("0" becomes 0)
// ** whereas explicit Boolean conversions uses different set of rules ("0" becomes true as string is not empty)



// STRICT EQUALITY (===)
// -> checks equality without type conversion
alert(0 === false); // false

// there is also a strict non-equality operator(!==), analogous to (!=)



// COMPARISON WITH NULL AND UNDEFINED 

// -> for strict equality check
alert(null === undefined); // false 
// because each of them is of different type

// -> for non-strict check == 
alert(null == undefined); // true
// they equal each other, but not with any other value



// STRANGE RESULT: null vs 0
alert( null > 0 );  // false
alert( null == 0);  // false
alert( null >= 0);  // true
// comparison convert null to number (0)
// == gives false for every comparision except null and undefined



// INCOMPARABLE UNDEFINED
// -> undefined should not be compared to other values
alert( undefined > 0 ); // false
alert(undefined < 0 );  // false
alert( undefined == 0); // false
// ** comparison conver undefined into NaN which returns false for all comparisons
// ** equality check returns false because undefined only equals null

