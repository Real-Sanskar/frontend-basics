
// 1. WHILE LOOP
let i = 0;
while(i < 3){  // shows 0, then 1, then 2
    alert(i);
    i++;
}


// 2. DO WHILE LOOP
// -> loop with first execute the body, then check the condition, if it's truthy, executes it again and again
i = 0;
do{
    alert(i);
    i++;
}while(i<3);
// This form of syntax should only be used when we want to execute the body of loop atleast once, regardless of the condition being truthy



// 3. FOR LOOP
for(begin; condition; step){
    // ... loop body ...
}

for(let i=0; i<3; i++){ // shows 0, then 1, then 2
    alert(i);
}


// -> any part of for can be skipped
// a. can skip begin
i = 0;
for(;i<3; i++){
    alert(i);
}

// b. can also remove step
i=0; 
for(; i<3; ){
    alert(i++); // similar to while loop
}

// c. can skip all three
for(; ;){
    // repeats without limits
}



// BREAKING THE LOOP
let sum = 0;
while(true){
    let value = +prompt("Enter a number", '');

    if(!value) break;

    sum += value;
}
alert(sum);
// ** "infinite loop + break" is great for the situations where loops condition must be checked not in beginning or not it end
// ** but in middle or even in several places of body



// // CONTINUE TO NEXT ITERATION
// for(let i=0; i<10; i++){
//     if(i%2 == 0) continue;

//     alert(i); // 1, then 3 ,5 ,7 ,9
// }


// ** NO BREAK/CONTINUE TO RIGHT SIDE OF ?
// -> break/continue directives cannot be used with ternary operator ?

// (i > 5)? alert(i): continue; // Syntax error


// LABELS FOR BREAK/CONTINUE
// -> used to break out of multiple nested loops at once

// labelName: for(...){
//     ...
// }


outer: for(let x=0; x<3; x++){
    for(let y=0; y<3; y++){
        let input = prompt(`Value of coords (${x},${y})`,'');

        // if an empty string or cancelled, then break out of both the loops
        if(!input) break outer;

        // do someting with value...
    }
}
alert('Done');
