// console.log("Exceptional Handling");

// let x = 2

// try{
//     if(10/x){
//     console.log("The Calculation is Working");   
// }
// }catch(Error){
//     console.log("Its an Error", Error);   
// }finally{
//     console.log("The Excecution Completed");    
// }

// console.log("Hello World");

// let a = 10
// let b = "Hello"

// console.log(b());

// let myarray = [1,2,3]
// console.log(myarray[6]);

// Throws RangeError: Invalid array length
// const arr = new Array(-1);

// function divide(a , b ){

// }

// try {
//     let marks = 120;

//     if (marks > 100) {
//         // throw new Error("Marks should be between 0 and 100");
//         console.log("Marks should be between 0 and 100");
        
//     }

//     console.log("Marks accepted");

// } catch (err) {
//     console.log(err.message);
// }



// 1️⃣ User Age & Score Validator
// Task:
// Ask the user to input age and score.
    // Throw an error if:
// Age is negative or above 120 → "Invalid age"
// Score is less than 0 or above 100 → "Invalid score"
// Catch the errors and display the message.
// Ensure a finally block prints "Validation complete" no matter what.
// Bonus: If both inputs are valid, print "User data accepted".

let age = parseInt(prompt("Enter Your Age"));
let score = parseInt(prompt("Enter Your Score"));

try{
    if(age<0 || age>120){
        throw new Error ("Invalid age")
    }
    if(score<0 || score>100){
        throw new Error("Invalid score")
    }else{
        console.log("User data accepted");   
    }
}
catch(Error){
    console.log("Error occurred", Error);
}
finally{
    console.log("Validation complete");
}







