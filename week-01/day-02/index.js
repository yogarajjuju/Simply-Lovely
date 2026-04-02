// --- DAY 2: Comparisons & Conditions ---
 console.log(5=="5");   // true  — JS converts types first
 console.log(5==="5")  // false — strict, checks type too
 console.log(5===5);  // true

 // ALWAYS use === in real code. == causes weird bugs.
 // if / else if / else — same as Java
 var marks =72;
 if(marks >=90){
    console.log("Distinction");
 } else if(marks>=60){
    console.log("First Class");
 } else if(marks>=50){
    console.log("You Pass");

 } else{
    console.log("try again bro , Better luck Next Time ")
 }

 // Ternary — short form of if/else

    let age =20;
    let status = age>=18 ?"Adult":"Minor";
    console.log(status);

    // Logical operators — same as Java
    let hasID = true;
    let hasTicket= true;
    if(hasID && hasTicket){
        console.log("Entry allowed");
    }
     if(!hasID || !hasTicket){
        console.log("Entry denied");
     }

     // --- MINI PROGRAM: Grade calculator ---
     function getgrade(score){
        if(score>=90) return "A";
        else if(score >=75) return "B";
        else if(score >=60) return "C";
        else if(score>=50) return "D";
        else return "F";
     }
    console.log(getgrade(95));
  console.log(getgrade(73));
    console.log(getgrade(40));

      console.log(getgrade(marks));