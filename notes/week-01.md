# Week 1 Notes
JS notes :
Day-01
JS is similar to java and instead of typing the data type like :
intt x = 0; 
we use "let" , "var" it automatically detects the datatyple llike in python 3
example : let x=10 // int , y ="juju" // string 
 to print we use :
 console.log(variable name )

 To define constants in java we use final but in here we use const same rule as we need to use uppercase
 eg : const PI =3.14;

 // JS is loosely typed — notice this doesn't crash:
let x = 10;
x = "now I'm a string"; // totally fine in JS!
console.log(x);
to run in terminal:
node week-01/day-01/index.js


Day-02:
// --- DAY 2: Comparisons & Conditions ---
  The comparsionn is differnt from java in here we need to us === for comparsion , if we use == it willl convert the datetype
  Example:
5=="5" // in java ok but in JS it converts the  string into the number so it return true 
we need to use 5==="5" now it commpares the datatype of the element int === string  so it return false

if and else if and else are same as java and the short hand if/else also 
let status = age >= 18 ? "Adult" : "Minor";

Logical operators are also same as java 

Functions in JS
To write a simple functionn we need like this 
function  name(variable){//body } 


## Day 3 — Arrays & Loops

### Arrays
- Arrays in JS are like ArrayList in Java
- Index starts at 0
- fruits[0] → first item
- fruits.length → total count

### Add / Remove
- fruits.push("item")  → adds to end
- fruits.pop()         → removes from end

### Loops
- for loop       → same as Java, use when you need index
- for...of loop  → gives you the VALUE directly (use this more)
- for...in loop  → gives you the INDEX (don't use on arrays)

### Array Methods (the important ones)
- filter → keeps items that pass a condition, returns new array
- map    → transforms every item, returns new array
- reduce → collapses array into one value (sum, total, etc.)

### The pattern
array.method(item => what to do with item)
- item is just a name you choose (m, n, x — anything)

### Math.max tip
- Math.max(...array) → spread operator (...) unpacks the array
- Math.max(82,45,91) works, but Math.max(array) doesn't
- ... is what makes it work

### Common mistakes
- for...in on arrays gives index not value — use for...of
- pop() removes last item — doesnt take an argument
- filter/map dont change original array, they return a new one
