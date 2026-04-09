let details = {
    name : "Rohan",
    age : 18,
    qualif: "10th",
    mob_no : 9824574584
};

// ES5 - System
let a = details.name;
let b = details.age;

// ES6 - New feature
const {name:naam, age, qualif, mob_no} = details; // gave variable

console.log(naam)

console.log("---------------------------------------------")
let hey = {...details};
hey.name = "Jiban"
console.log(hey)

// Remember this one-------------------
const kuchV = []

function update(a,b) {
    kuchV({a,b});
}

update()