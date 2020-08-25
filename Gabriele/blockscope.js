// 1. Depending on the value of a variable (determiner), assign a value to x. If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

let determiner = -5;
let x;

if (determiner < 0) {
   console.log(x = "is less than 0");   // x is less than 0
} else {
    (x = "is equal or greater than 0")
    console.log(x);  
};

// or

if (determiner = Math.random()*-1) {
    x = Math.random()*-1;
 } else {
 x = Math.random();
}
  
// console.log(determiner);
console.log(x); // random negative number 


///////////////////////////////////

// 2. New Variables
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.
// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
//If determiner is less than 0, updater's value should be "Less than 0".

let determiner2 = 28;
let updater;



if (determiner2 >= 0) {
   updater = "Greater or equal to 0";
   let message = "Positive Integer";
    console.log(message); // "Positive Integer"
} else {
    console.log(updater = "Less than 0");
};



// Question: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

// My answer -> If we would print "message" outside we would have got an error, since variable "message" has been declared inside the if statement (local scope) it cannot be recognized out of the if statement (on global scope)


// 3. Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

// My answer: 
// 'Ternary' is often used as a shortcut for 'if statements' as sometimes it reduces code compared to 'if statements'. But with ternary we can check only one condition. If we need to check more conditions then we use if statements.


pizzaForDinner = ("I am really hungry") ? "true" : "false";


// instead with if 


// let pizza;
if ("I am really hungry") {
    let pizzaForDinner = true;
} else {  
   let pizzaForDinner = false;
};


 // with if I could add more conditions

 let dinner;
 if ("I am really hungry") {
    let dinner = "pizza";
} else if { "I am not too hungry but I'm craving pizza"
   let dinner = "half pizza";
} else {
    let dinner = "salad";
}

