var naam = null;
var n;
console.log(naam); // ! null
console.log(n); // ! undefined
console.log("Type of naam : " , typeof naam); // ! object

console.log("----------------------------")

// To check if a variable is null, use the strict equality (===) or inequality (!==) operator.

let variable = null;

if (variable === null) {
  console.log("variable is null");
}