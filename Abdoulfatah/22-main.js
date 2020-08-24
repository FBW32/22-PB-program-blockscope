// question 1:
let D = -6
let x;

if (D >= 0) {

    console.log(x = "is equal/greater than 0");
} else {
    console.log(x = "is less than 0");
}
// or 
let Determiner;
Determiner = -4;

if (Determiner >= 0 ) {
    let x ;
    x = Math.random()
    console.log(x);
} else {
    x = Math.random()*-1;
    console.log(x);
}

// question 2:
let Determiner2;
let updater;
Determiner2 = 300;

if (Determiner2 >= 0 ) {
    let updater = Math.random() ;
    let message = "Positive Integer";
    console.log(message);
} else {
    updater = Math.random()*-1;
}

// question 3:
// Ternary is an operator that takes three arguments, 1st: condition, 2nd: is executed if condition is true, 3rd: is executed if the condition is false.
// we could say ternary is just {if-else} statement in one line.
// we could use ternary ideally when we want to give a value to a variable depending on a condition; as well as to reduce the code; because it is shorter than {if-else} statement.

// example:
// depending on our our question number 1:
let y = (D >= 0) ? 10 : -2;
console.log(y);
