// On the block

/* 1. Updater
      Depending on the value of a variable (determiner), assign a value to x.
      If determiner is less than 0, x's value should be "Less than 0"
      If determiner is greater or equal 0, x's value should "Greater or equal to 0".
*/
let determiner = 5;
let x = (determiner < 0) ? `${determiner}'s value should be "Less than 0"` : `${determiner}'s value should "Greater or equal to 0"`;
console.log(x); // 5's value should "Greater or equal to 0"

/* 2.  New Variables
    Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

    If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
    If determiner is less than 0, updater's value should be "Less than 0".
    Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.
*/
let updater = 10;
if (determiner >= 0) {
    console.log(`${updater}'s value should be "Greater or equal to 0"`); // 10's value should be "Greater or equal to 0"
    let message = "Positive Integer";
    console.log('Message: ', message); // Message:  Positive Integer
} else if (determiner < 0) {
     console.log(`${updater}'s value should be "Less than 0"`);
 }

// If we try to print message outside the if statement. It will give a ReferenceError: message is not defined. message is a blockscope.

/* 3. Ternary v.s. If statement
    When do you use a ternary v.s. an if statement? Give an example.
*/
// A ternary operator takes three arguments. The first one is the condition, the second one is executed if the condition is true, and the third one is executed if the condition is false.
// When doing multiple operations, we don't use ternary
// The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
// In if statement else block is not mandatory.
let z = (10 > 5) ? "true" : "false";
console.log(z); // true
if (10 > 5) {
    console.log("true"); // true
} else {
    console.log("false");
}