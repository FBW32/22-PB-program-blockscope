// 24.08.2020
// EXERCISE 1

// Updater
// Depending on the value of a variable (determiner), assign a value to x.
// If determiner is less than 0, x's value should be "Less than 0"
// If determiner is greater or equal 0, x's value should "Greater or equal to 0".

let determiner = 34;
let x = 29;
if (false) {
    console.log(determiner >= x) ? `Less than 0` : `Greater or equal to 0`;    
}
console.log(determiner);

// EXERCISE 2
// Depending on the value of the determiner, assign a value to another variable (updater) and create another variable.

// If determiner is greater of equal to 0, updater's value should be "Greater or equal to 0" and create another variable called message, assign a value of "Positive Integer" and print message.
// If determiner is less than 0, updater's value should be "Less than 0".


let updater = 20;
if (determiner >= 0) {
    (updater >= 0);
    let message = "Positive Integer";
    console.log(message);
} else if (determiner < 0) {
    (updater < 0);
} console.log(updater);


// EXERCISE 3
// Ternary v.s. If statement
// When do you use a ternary v.s. an if statement? Give an example.

// Ternery is used when we have find a solution in three conditions.
// Example 

let scene = 'This';
let mood = 'Life';
let combination = (scene === 'This') ? `${scene} is ${mood}` : null;
console.log(combination);


// Example 2
// if statements are use to determine if a stored condition is accepted or not.

let dog = 20;
let cat = 12;
if (cat < dog) {
    dog = "More"
} console.log(dog)









// let determinerr = 12;
// let updater = 15;
// if (determiner >= 0){
//     let message = "positive Integer";
//     console.log(message);
//     else if ( determiner < 0)
//         console.log(`${updater}'s`);
// }












// let updater;
// if (determiner >= 0) {
//   updater = "Greater or equal to 0";
//   let message = "Positive Integer";
//   console.log(message);
// } else {
//   updater = "Less than 0";
// }
// console.log(updater);


