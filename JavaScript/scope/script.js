// Global Scope

var a = 100;
var b = 50;

function myfunction(){
    console.log(a, "Inside the Function");
    console.log(b, "Inside the Function");
}

    console.log(a, "Outside the Function");
    console.log(b, "Outside the Function");

myfunction()


let x = [1,2,3,4,5];
let y = {name:"sandy", age:23};

function myfun(){
    console.log(x, "Inside the Function");
    console.log(y, "Inside the Function");
}

    console.log(x, "Outside the Function");
    console.log(y, "Outside the Function");

myfun()


// Function Scope

function f1() {
    var c = "Hello World";
    console.log(c);
}
// console.log(c);
f1()

function f2() {
    const d = [1,2,3];
    console.log(d);
}
// console.log(d);
f2()


// Block Scope

let s = 18;
if(s<15) {
    var greet = "Its a number less than 15";
    console.log(greet);
}else{
    var reject = "Its a number greater than 15"
    console.log(reject);
}
console.log(reject);
