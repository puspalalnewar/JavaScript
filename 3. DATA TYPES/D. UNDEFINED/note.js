console.log(age); 
//var is hoisted and initialized to undefined, so using it before the line that assigns a value returns undefined.
var age = 18;


// let is hoisted but not initialized (it lives in the Temporal Dead Zone), so accessing it before its declaration throws a ReferenceError.
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = "Hello";