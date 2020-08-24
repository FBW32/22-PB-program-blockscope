// On the block

// 1. Updater
// Depending on the value of a variable (determiner), assign a value to `x`. 
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

let determiner = -7;
if (determiner < 0){
    x = `Less than 0`
} else if (determiner >= 0){
    x = `Greater or equal to 0`
}
console.log(x); // Less than 0

// 2. New Variables 
// Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

let determiner2 = - 666;
let updater = determiner2;

if (determiner2 >= 0){
    console.log(`${updater} should be greater or equal to 0`);
    let message = "Positive Integer";
    console.log('message: ', message);
} else if (determiner2 < 0){
    console.log(`${updater} should be less than 0`);
} // -666 should be less than 0

// **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

// AQ: if i try `console.log(message);` outside if statement I'm getting `ReferenceError: message is not defined`.

// 3. Ternary v.s. If statement 
// When do you use a ternary v.s. an if statement? Give an example.

// Ternary

// A ternary operator allows you to assign one value to the variable if the condition is true, and another value if the condition is false.

// It is a best practice to use the ternary operator when it makes the code easier to read. If the logic contains many if...else statements, you shouldn't use the ternary operators.
let age = 12;
let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed); // false

// If statement

// Use if to specify a BLOCK of code to be executed, if a specified condition is true. Use else to specify a BLOCK of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.

if (age > 18){
    console.log('adult');
} else if (age > 12) {
    console.log('teenager');
} else {
    console.log('kid');
} // kid

