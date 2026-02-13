// Recursive Function in js - A recursive function in JavaScript is a function that calls itself to solve a problem by breaking it down into smaller, similar sub-problems. Every recursive function must have two main parts to prevent it from running indefinitely: a base case and a recursive case. 


function addition(num){

    if(num == 0){
        return 0
    }else{
        return num + addition(num - 1)
    }
}
console.log(addition(10));


function multiply(num1){

    if(num1 == 1){
        return 1
    }else{
        return num1 * multiply(num1 - 1)
    }
}
console.log(multiply(10));


function subtract(num2){
    if(num2 == 0){
        return 0
    }else{
        return num2 - subtract(num2 - 1)
    }
}
console.log(subtract(5));

function divide(num3){
    if(num3 == 1){
        return 1
    }else{
        return num3 / divide(num3 - 1)
    }
}
console.log(divide(100));


