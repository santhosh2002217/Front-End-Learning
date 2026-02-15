// Recursive Function in js

// A recursive function in JavaScript is a function that calls itself to solve a problem by breaking it down into smaller, similar sub-problems. Every recursive function must have two main parts to prevent it from running indefinitely: a base case and a recursive case.

// function addition(num) {
//   if (num == 0) {
//     return 0;
//   } else {
//     return num + addition(num - 1);
//   }
// }
// console.log(addition(10));

// function multiply(num1) {
//   if (num1 == 1) {
//     return 1;
//   } else {
//     return num1 * multiply(num1 - 1);
//   }
// }
// console.log(multiply(10));

// function subtract(num2) {
//   if (num2 == 0) {
//     return 0;
//   } else {
//     return num2 - subtract(num2 - 1);
//   }
// }
// console.log(subtract(5));

// function divide(num3) {
//   if (num3 == 1) {
//     return 1;
//   } else {
//     return num3 / divide(num3 - 1);
//   }
// }
// console.log(divide(100));

// The Temporal Dead Zone refers to the period between the entering of a scope and the actual declaration of a variable using let or const. During this period, the variable is in an "uninitialized" state and accessing it will result in a ReferenceError.

//   console.log(name);
//   var name = "js";
//   console.log(name);

// Hoisting is a JavaScript mechanism where the interpreter appears to move the declarations of functions, variables, and classes to the top of their containing scope during the compilation phase, before the code is executed.

//   show();
//   function show() {
//     console.log("Heloooo Js");
//   }

// Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code
//   function show() {
//     var a = 30;
//     console.log(a);
//   }
//   show();
//   console.log(a);


//   function show() {
//     if(10 > 7){
//         let name = "js"
//         console.log(name);
//     }
//     console.log(name);
//   }
//   show();

// An Immediately Invoked Function Expression (IIFE), pronounced "iffy," is a JavaScript function that runs as soon as it is defined.
// (
//     function(){
//         console.log(" I am a IIFE");
//     }()
// )


// The arguments object in JavaScript is a built-in, array-like object that is locally accessible inside all non-arrow functions. 


function show1(num , ...nums){
    console.log(num);
    console.log(nums);
 
}
show1(1, 2, 3, 4, 5,6) //rest operator


function show(num){
    console.log(num)
    console.log(arguments);
    
}
show(1, 2, 3, 4, 5, 6)

// // A higher-order function in JavaScript is a function that does at least one of the following: 
// // Takes one or more functions as arguments (often called callback functions).
// // Returns a function as its result. 

function greet(name, callback, call){
    console.log(name);
    callback()  
    call() 

}

function show(){
    console.log("How are You");    
}

function word(){
    console.log("Santhosh");
    
}
greet("Hi", show, word)


// Closure
// In JavaScript, a closure is the combination of a function and its surrounding state (its lexical environment). A closure allows an inner function to retain access to variables from its outer scope, even after the outer function has finished executing. 


function makeCounter() {
  let count = 0; // The variable to be "closed over"

  function increment() {
    count++;
    return count;
  }
  return increment; // Return the inner function
}

const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
// console.log(counter1());

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// The this keyword in JavaScript is a special identifier that references the object in whose context the current function is executing

// Alone in the global context: this refers to the global object (window in a browser).
console.log(this);  

// In a regular function (strict mode): this is undefined.
function enter(){
    console.log(this);   
}
enter()


// In event handlers: When used as an event handler (e.g., in an addEventListener callback), this typically refers to the DOM element that triggered the event. 

let mybtn = document.getElementById("btn")

mybtn.addEventListener("click", function(){
    this.style.backgroundColor = "red"
})



