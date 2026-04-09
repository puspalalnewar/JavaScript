// ? String is a primitive type that holds a sequence of characters. String in Javascript is written within a pair of single quotation marks '', double quotation marks "", or backticks `` (template literals). All types of quotes can be used to contain a string but only if the starting quote is the same as the end quote.

// * The String object is used to represent and manipulate a sequence of characters.

let place = "Assam";
let name = 'Puspalal';
let fruit = `Apple`;

console.log("Place : " + place + "\nName : " + name + "\nFruit : " + fruit);

let str = "hello";
let str1 = "hello";
let str2 = new String("hello");

console.log(str === str1); // true
console.log(str === str2); // False

console.log(typeof str)
console.log(typeof str2)