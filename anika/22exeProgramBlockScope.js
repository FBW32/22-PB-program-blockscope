// # On the block

// #### 1. Updater
// * Depending on the value of a variable (determiner), assign a value to `x`.
//     - If determiner is less than 0, `x`'s value should be "Less than 0"
//     - If determiner is greater or equal 0, `x`'s value should "Greater or equal to 0".

// If d < 0, x should be < 0.
// If d >= 0, x should be >= 0

// let d = 10;

// if (d < 0) {
//   let x;
//   x = Math.random() * -1;
//   console.log(x);
// } else {
//   x = Math.random();
//   console.log(x);
// }
// 0.4380020239420541

// Also possible:

let determiner = -5;

if (determiner < 0) {
  let x;
  console.log((x = "is less than 0"));
} else {
  x = "x is equal to or greater than 0";
  console.log(x);
}
// x is less than 0

// #### 2. New Variables
// * Depending on the value of the determiner, assign a value to another variable (`updater`) and create another variable.
//     - If determiner is greater or equal to 0, `updater`'s value should be "Greater or equal to 0" and create another variable called `message`, assign a value of "Positive Integer" and print message.
//     - If determiner is less than 0, `updater`'s value should be "Less than 0".

let d2 = 5;

// If d2 >= 0, updater >= 0 and create variable message and print it.
// If d2 < 0, updater < 0.

if (d2 >= 0) {
  let updater;
  updater = "Greater or equal to 0";
  console.log(updater);
  let message = "Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
  console.log(updater);
}
// Greater or equal to 0
// Positive Integer

// - **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

// We would get a reference error because the variable message was declared
// in block scope and therefore only exists inside the block scope.

// #### 3. Ternary v.s. If statement

// - When do you use a ternary v.s. an if statement? Give an example.

// You use a ternary if you have one condition and a truthy and a
// falsy value. Like:

// ternary:
let laptop = "not broken";

// condition: laptop === "broken"
// value1: sad smiley
// value2: happy smiley

laptop === "broken" ? console.log("sad smiley") : console.log("happy smiley");
// happy smiley

// if statement:
// You use a if statement if you have multiple conditions or more than two values.
// Like:

// If laptop2 is broken, print "repair station".
// If repair is too expensive, print "bin".
// If repair is expensive but not too expensive, print "bleed".
// Else, print "happy".

let laptop2 = "works";

if (laptop2 === "broken") {
  console.log("repair station");
  let repair = "expensive but not too expensive";
  if (repair === "too expensive") {
    console.log("bin");
  } else {
    console.log("bleed");
  }
} else {
  console.log("happy");
}
// happy
