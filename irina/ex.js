// On the block
// 1. Updater
// Depending on the value of a variable (determiner), assign a value to x.


// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".
let determiner = 30;
let x = ((determiner < 0) ? `x value is  Less than 0` : `x value is greater or equal to 0`);
console.log(x); //x value is greater or equal to 0

// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

// If determiner is greater or equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
let updater = determiner;
if (determiner >= 0) {
    console.log(`${updater}'s value should be "Greater or equal to 0"`); // 10's value should be "Greater or equal to 0"
    let message = "Positive Integer";
    console.log('Message: ', message); // Message:  Positive Integer
} else if (determiner < 0) {
     console.log(`${updater}'s value should be "Less than 0"`);
 }

// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.
//If statement will execute only when the condition is truthy, while the ternary will give the result true or false. 
let h = 50;
let y = 20;
if (h < y) {
    console.log(`${h} is less than ${y}`);
}
else {
    console.log(`${h} is greater than ${y}`);
} //50 is greater than 20

let z = (h < y) ? true : false;
console.log(z); // false
console.log( (h < y) ? `${h} is less than ${y}` : `${h} is greater than ${y}`); //50 is greater than 20

/*
Ternary is used for pontual operations:
- To check if a operations is true or false. 
- To set a variable 

The  if/ else conditional us used when you are dealing with multiple operations or functions. It is also possible to use a ternary operator inside the if statement. */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement. */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. 
If the condition is falsy, another statement can be executed (else clause).  Can be any statement, including block statements and further nested if statements. */