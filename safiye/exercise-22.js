//1.Updater
let determiner = -5;
let x = determiner < 0 ? "Less than 0" : "Greater or equal to 0";
console.log(x);
//2.New Variables
let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
}
console.log(updater);
//Question:
//console.log(message);//ReferenceError: message is not defined
//because message is a local variable, it cant be used globally, so we cant call it outside its local {}.

//3. Ternary v.s.If statement
//when I want to declare a variable depending on a statement, I use ternary operators.So in this time the variable that I defined by using ternary op. is global.
//if I use if statements in this case and declare a variable in this statement it will be a local variable.
//so using if statements doesnt change anything globally unlike ternary op.
let time = 9;
let myMessage =
  time < 12
    ? "Good Morning!"
    : time >= 12 && time < 18
    ? "Good day!"
    : time >= 18 && time < 22
    ? "Good Evening"
    : "Good Night";
console.log(myMessage);
//if you want to use the variable later you should use ternary operator.
