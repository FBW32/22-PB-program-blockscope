let determiner = Math.floor(Math.random() * 100) - 10;
let x;
if (determiner < 0) {
  x = "Less than 0";
} else if (determiner >= 0) {
  x = "Greater or equal to 0";
}
console.log(`the value for determiner is: ${x}`);

/////2

let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else if (determiner < 0) {
  updater = "Less than 0";
  let message = "negative value";
  console.log(message);
}
//Question
//console.log(message); message is not defined
// because message is a local variable.

//3
let var1 = 23;
if (var1 % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

console.log(23 % 2 == 0 ? "even" : "odd");
//An if/else statement emphasises the branching first and what's to be done is secondary,
// while a ternary operator emphasises what's to be done over the selection of the values to do it with.
