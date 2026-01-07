// // Functions

// // Function Declaration or Definition
// function myfunc(){
//     console.log("Js Functions");    
// }

// // Function Calling
// myfunc()


// // tasks
// function greet(name){
//     console.log("Hello" + name );
// }
// greet(" Santhosh")

// function myf1(a,b){
//     console.log(a + b);
// }
// myf1(2,5)

// function myf2(c,d,e){
//     console.log(c - d + e );
// }
// myf2(5,2,8)


// function myf3(f,g){
//     console.log(f*g);
// }
// myf3(2,8)

// function myf4(h,i){
//     console.log(h/i);
// }
// myf4(10,2)

// function myf5(j,k){
//     console.log(j%k);    
// }
// myf5(11,10)

// function myf6(x){
//     if(x % 2 == 0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }
// myf6(2)

// Task

// 1. Write a function that prints "Hello World" in the console.
function f1(){
    console.log("Hello World");
}
f1()

// 2. Write a function that takes a name as a parameter and prints a greeting message.
function f2(name){
    console.log(`welcome ${name}`);
}
f2("santhosh")

// 3. Write a function that takes two numbers and prints their sum.
function f3(a,b){
    console.log(a + b);
}
f3(4,5)

// 4. Write a function that returns the square of a given number.
function f4(num){
    return num*num
}
console.log(f4(5));

// 5. Write a function that checks if a number is even or odd and prints the result.
function f5(x){
    if(x % 2 == 0){
        console.log("even number");
    }
    else{
        console.log("odd number");
    }
}
f5(2)

// 6. Write a function that takes two numbers and returns the larger one.
function f6(num1,num2){
    if (num1 > num2){
        return num1
    }else{
        return num2
    }

}
console.log(f6(10,20));

// 7. Write a function that takes a string and returns its length.
function f7(word){
    return word.length
}
console.log(f7("javascript"));

// 8. Write a function that takes three numbers and returns their average.
function f8(d,e,f){
    return (d+e+f)/3
}
console.log(f8(10,20,30,"AVG"));

// 9. Write a function that accepts age and returns "Adult" or "Minor".
function f9(age){
    if (age < 18){
        return "Minor"
    }else{
        return "Adult"
    }
}
console.log(f9(19));

// 10. Write a function that takes a price and tax percentage and returns the final price.
function f10(price,tax){
    return price + ((price*tax)/100)
}
console.log(f10(110,20));


// 11. Write a function that takes an array and returns the first element.
function f11(arr){
    return arr[0]
}
console.log(f11([11,22,33,44]));

// 12. Write a function that prints all elements of an array.
function f12(array){
    for(y=0; y<array.length; y++){
        console.log(array[y]);
    }
}
f12([1,2,3,4,5])

// 13. Write a function that takes a string and returns it in uppercase.
function f13(string){
    return string.toUpperCase()
}
console.log(f13("hello world"));


// 14. Write a function that returns the area of a rectangle (length, width).
function f14(l,b){
    return l*b
}
console.log(f14(10,8));


// 15. Write a function that takes a password and returns "Valid" if the length is at least 8 characters.
function f15(password){
    if(password.length>=8){
        return "valid"
    }else{
        return "invalid"
    }
}
console.log(f15("sandy@1234"));


