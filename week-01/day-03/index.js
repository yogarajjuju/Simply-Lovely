// Arrays and loops 
// In js Arrays is like Arraylist in java 
let fruits = ["mango", "banana", "apple" , "orange", "watermelon"];
console.log(fruits[0]);
console.log(fruits.length);

// add/remove
fruits.push("grapes");
fruits.pop("banana");
console.log(fruits);

//loops
for(let i =0; i<fruits.length;i++){
    console.log(i,fruits[i]);

}
// in js we have for each lile loop 
 for(let fruit of fruits){
    console.log(fruit.toUpperCase());
 }
 // Array Methods in js 
 let numbers= [10, 60, 70, 50, 33, 55, 80];

 //Filter - keep  items that pass a condition 

 let bigNumbers = numbers.filter(n=>n>20);
 console.log("Bignumbers:", bigNumbers);

 //map in js  -- transforms every item 
 let doubled = numbers.map(n=>n*2);
 console.log("Doubled", doubled);

 // find --  first item  that matches 

 let firstBig = numbers.find(n=> n>20);
 console.log("First big:", firstBig);
// mini progran : Student marks analyzer ---
 let studentmarks =[82,45,91,67,55,78,39,88];

 let passed = studentmarks.filter(m=>m>=50);
 let failed = studentmarks.filter(m=>m<50);
 let toppers = studentmarks.filter(m=>m>=80);
 let total =studentmarks.reduce((sum,m)=>sum+m,0);
 let average = total / studentmarks.length;


 console.log(passed.length);
 console.log(failed.length);
 console.log(toppers);
 console.log(average.toFixed(2))
 let max = Math.max(...studentmarks)
 console.log(max);
