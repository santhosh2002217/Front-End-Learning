// 1. Write a function that prints "Hello World" in the console.
const f1 = ()=> {
    console.log("Hello World");    
}
f1()

// 2. Write a function that takes a name as a parameter and prints a greeting message.
const f2 = (name)=> {
    console.log(`Good Morning ${name}`);
}
f2("Santhosh")

// 3. Write a function that takes two numbers and prints their sum.
const f3 = (a,b)=> {
    console.log(a + b);
}
f3(10,70)

// 4. Write a function that returns the square of a given number.
const f4 = (num)=> {
    console.log(num*num);
}
f4(10)

// 5. Write a function that checks if a number is even or odd and prints the result.
const f5 = (num1)=> {
    if (num1 % 2 == 0){
        console.log("Its Even Number");
    }else{
        console.log("Its Odd Number");
    }
}
f5(8)

// 6. Write a function that takes two numbers and returns the larger one.
const f6 = (num2,num3)=> {
    if (num2 > num3){
        return num2        
    }else{
        return num3
    }
}
console.log(f6(710,500));

// 7. Write a function that takes a string and returns its length.
const f7 = (str)=> {
    return str.length
}
console.log(f7("mernstack"));

// 8. Write a function that takes three numbers and returns their average.
const f8 = (function(x,y,z){
    return (x+y+z)/3
}
)
console.log(f8(2,4,6));

// 9. Write a function that accepts age and returns "Adult" or "Minor".
const f9 = (function(age){
    if (age<18){
        return "Minor"
    }else{
        return "Adult"
    }
}
) 
console.log(f9(19));

// 10. Write a function that takes a price and tax percentage and returns the final price.
const f10 = (function(rate,tax){
    return rate + ((rate*tax)/100)
}
)
console.log(f10(100,15));

// 11. Write a function that takes an array and returns the first element.
const f11 = (function(array){
    return array[2]
}
)
console.log(f11([22,33,44,55,66,77,88]));

// 12. Write a function that prints all elements of an array.
const f12 = (function(arr){
    for (i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
)
f12([1,2,3,4,5])

// 13. Write a function that takes a string and returns it in uppercase.
const f13 = (function(string){
    return string.toUpperCase()
}
)
console.log(f13("hello world"));

// 14. Write a function that returns the area of a rectangle (length, width).
const f14 = (function(length,width){
        return length*width
}
)
console.log(f14(12,5));

// 15. Write a function that takes a password and returns "Valid" if the length is at least 8 characters.
const f15 = (function(password){
     if(password.length>=8){
        return "valid"
    }else{
        return "invalid"
    }
}
)
console.log(f15("Sand@223"));



(function(){
    console.log("hello pondy");
}
)
()

