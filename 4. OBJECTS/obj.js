let user = new Object(); // "object constructor" syntax

let user_1 = {}; // "object literal" syntax

let user_2 = {
    name : "Rohan",
    age : 25
};

let user_3 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

if(isEmpty(user_3)) {
    console.log("")
}else {
    console.log("Ha")
}