// # 1. Updater
// Depending on the value of a variable (determiner), assign a value to `x`. 
// If determiner is less than 0, `x`'s value should be "Less than 0"
// If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".


let determiner = 20;

if (determiner < 0){
    x = "value is < 0"

} else if (determiner >= 0){
    x = "value is >= 0"
    console.log(x);
}   // value is >= 0


// 2.  Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
// - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message. 
// - If determiner is less than 0, `updater`'s value should be "Less than 0".

 let updater = 25;

 if (determiner >= 0){
     console.log(`${updater} >= 0`); //25 >= 0

     let message = 30;
     console.log(message); //30
 }

// b. What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file. 

// it will give referenceError because message is in the block scope not in the global scope.

//  3. Ternary v.s. If statement 
// When do you use a ternary v.s. an if statement? Give an example.

//a ternary operation is used when there is a need to set a value to variable  

let y = (x == 42) ? true : false;

// while an if statement is used to sent conditions to variables and but internally and externally