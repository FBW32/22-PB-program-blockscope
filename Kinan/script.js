let determiner = Math.floor(Math.random() * 100) - 10;
let x;
if (determiner < 0) {
    x = "Less than 0";
}
else {
    x = "Greater or equal to 0";
}
console.log(x);
/////////////////////////////////////////////////////////////////
/* #### 2. New Variables 
* Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
    - If determiner is greater of equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called
    `message`, assign a value of "Positive Integer" and print message. 
    - If determiner is less than 0, `updater`'s value should be "Less than 0". */
    //////////////////////////////////////////////////////////
if (determiner >= 0) {
    //let updater;
    updater = "Greater or equal to 0";
    let message = "Positive Intger"
    console.log(message);
}
else {
    updater = "Less than 0";
}
console.log(updater);
//console.log(message); // ReferenceError: message is not defined
///////////////////////////////////////////////////////////////
/* #### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example. */
//////////////////////////////////////////////////////////////
console.log("if statement : if (condition) result = 'something'; else result = something")
console.log("ternary : result = (condition) ? 'something' : 'something'");
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////