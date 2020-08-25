// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".
let determine = 20;
let x = determine < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);

// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
let updater;

// If determiner is greater or equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
if (determine >= 0) {
    console.log(updater = "Greater or equal to 0");
    let message = "Positive Integer";
    console.log(message);
    
} 
else {
    console.log("less than 0");
}
console.log(updater);
// If determiner is less than 0, updater's value should be "Less than 0".
// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

//***//message will not be printed out of the scope because it is in block/local.//** */