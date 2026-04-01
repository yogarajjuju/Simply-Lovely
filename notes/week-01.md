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