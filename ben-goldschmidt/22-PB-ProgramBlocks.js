// On the block

console.log("")
console.log("QUESTION 1")
// 1. Updater
// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

let determiner1 = Math.floor(Math.random() * 10) - 10;

if (determiner1 < 0) {
    x = "Less than 0";
}
else {
    x = "Greater or equal to 0";
}
console.log(x);
// 



console.log("")
console.log("QUESTION 2")
// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

let determiner2 = 10;

if (determiner2 >= 0) {
    updater = "Greater or equal to 0";
    let message1 = "Positive Intger"
    console.log(message1);
}
else {
    updater = "Less than 0";
}
console.log(updater);
// Greater or equal to 0
// Positive Intger

// console.log(message1);
// If we try to print the message outside of the if statement, it brings back a;
// ReferenceError: message1 is not defined
// since the message1 was defined in a local block, it is not defined in the global block




console.log("")
console.log("QUESTION 3")
// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

console.log("Ternary statements are clean coding and quick means to give value to a variable, and they, therefore, should be used when there are is only a few conditions needing to be met (normally 1 condition). This prevents unecessary repition of code.")
console.log("Thus, an if statment should to be used when there are more than a few conditions that need to be met, in order to determine the values of variables.")