// NULLISH COALESCING 

// -> Used to find the first defined value from the list
// -> returns first argument if it's not null/undefined, otherwise second

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
user = "John";
alert(user ?? "Anonymous"); // John (User is not null/undefined)


// -> Sequence of ??  to select the first value from list that isn't null/undefined
let firstName = null;
let secondName = null;
let nickName = "SuperCoder";
alert(firstName || secondName || nickName || "Anonymous"); // SuperCoder


// ** COMPARISON WITH ||
// -> || returns the first truthy value
// -> ?? returns the first defined value

// -> || doesn't distinguish between faslse, 0, "", null/undefined, treats as falsy
// -> ** In practice, we use default values only when variable is null/undefined

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
// In practice, 0 height is valid, hence shoudn't be replaced by default
// So, ?? does the right thing



// ** PRECEDENCE 

// -> Same priority as || , evaluated before = and ?
// -> evaluated after +, - , *
// -> Hece use parenthesis in expressions
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000



// NOTE: It is forbidden to use ?? with || or && without parentheses 
let x = 1 && 2 ?? 3; // Syntax error

x = (1 && 2) ?? 3; // Works
alert(x);