const s1 = "2 + 2"; // creates a string primitive
console.log(s1)
const s2 = new String("2 + 2"); // creates a String object
console.log(s2)
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

// ! A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log("-------------")
console.log(eval(s2.valueOf()))