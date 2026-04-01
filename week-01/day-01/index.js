// --- DAY 1: Variables & Types ---

// In Java you did: int age = 20;
// In JS you do:
let age =20;
let name ="Anya";
let isStudent = true;
let score = null;// intentionally empty

console.log(age);
console.log(name);
console.log(isStudent)
console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log (typeof isStudent)// "boolean"

// const = can never be reassigned (like final in Java)

const PI =3.14;
console.log(PI);
// JS is loosely typed — notice this doesn't crash:
let x = 10;
x ="now I' am a string";// totally fine in JS!
console.log(x);