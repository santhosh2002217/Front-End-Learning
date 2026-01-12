// // // Array Iterations

// // // For each()

// // let myarr1 = [1,2,3,4,5];

// // myarr1.forEach((elemnt)=>console.log(elemnt));


// // let myarr2 = [11,"hello",5,"js",true,100,false,"java"];

// // myarr2.forEach(function(data,index,arr){
// //     console.log(data, index, arr);    
// // }
// // )

// // const myarr3 = [11,22,33,44,55,66,77];

// // myarr3.forEach((ele,index,array)=>console.log(ele,index,array));

// // // Map()

// // let myarr4 = [1,2,3,4,5]
// // const newarr4 = myarr4.map(num => num*2)
// // console.log(newarr4);


// // TASK

// 1. Create a new array by multiplying each number from a given array by 2.
let myarr1 = [1,2,3,4,5,6,7,8,9,10];
const newarr1 = myarr1.map(num1 => num1 * 2);
console.log(newarr1, "multiplyied each number from a given array by 2");

// 2. Print all elements of an array in uppercase.
let myarr2 = ["hello", "world", "java", "mern"];
myarr2.forEach(upper => console.log(upper.toUpperCase()))

// 3. Calculate and print the sum of all numbers in an array.
let myarr3 = [2,4,6,8,10];
myarr3.forEach(sum => console.log(sum + sum))

// 4. Add a prefix to each name in an array and return a new array.
let myarr4 = ["santhosh","john","maddy"];
const newarr4 = myarr4.map((prefix)=>{
    return "Mr." +  prefix
})
console.log(newarr4);
  
// 5. Create a new array containing the square of each number from a given array.
let myarr5 = [2,4,6,8,10];
const newarr5 = myarr5.map(square => square*square)
console.log(newarr5);

// 6. Print only the numbers from an array that are greater than a certain threshold.
let myarr6 = [5,10,15,20,25,30,35,40,45,50]
myarr6.forEach(threshold => {
    if (threshold > 20)
        console.log(threshold);
})

// 7. Convert each number in an array into a string with a currency symbol and return the new array.
let myarr7 = [1,2,3,4,5];
const newarr7 = myarr7.map(symbol => {
    return "$" + symbol
})
console.log(newarr7);

// 8. Create a new array by multiplying each number by a specific factor.
let myarr8 = [1,2,3,4,56,7,8,9,10]
const newarr8 = myarr8.map(num2 => num2 * 4)
console.log(newarr8);

// 9. Create a new array containing the length of each string from a given array.
let myarr9 = ["apple","grape", "banana","orange"]
const newarr9 = myarr9.map(str => str.length)
console.log(newarr9);
  
// 10. Count how many numbers in an array meet a specific condition and print the count.
let myarr10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0;
myarr10.forEach((arr)=>{
if(arr % 2 == 1){
    count = count + 1
}
})
console.log(count);


