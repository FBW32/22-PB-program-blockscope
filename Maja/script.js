/* 1. Updater

    Depending on the value of a variable (determiner), assign a value to x.
        If determiner is less than 0, x's value should be "Less than 0"
        If determiner is greater or equal 0, x's value should "Greater or equal to 0". */

let determiner;
let less = "Less than 0";
let greater = "Greater or equal to 0"
let x = determiner >= 0 ? greater : less;
console.log(x);  // "Less than 0"

/* 2. New Variables

    Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
        If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
        If determiner is less than 0, updater's value should be "Less than 0".

    Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file. */


let updater = determiner >= 0 ? greater : less;
console.log(updater);

// or

    if (updater >= 0 ) {
        console.log(greater);
        let message = "Positive Integer";
        console.log(message);
    } else {
        console.log(less);
    }  // "Less than 0"


    // If we print "message" outside of the if statement than would throw the error. 



/*3. Ternary v.s. If statement
 When do you use a ternary v.s. an if statement? Give an example. */


 // The case above shows an example;
 // that if I want to save the value of update than I use Ternary. But if I want to see only result /// of condition, than I use if statement.

    
    