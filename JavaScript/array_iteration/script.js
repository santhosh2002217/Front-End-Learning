// // // // Array Iterations

// // // // For each()

// // // let myarr1 = [1,2,3,4,5];

// // // myarr1.forEach((elemnt)=>console.log(elemnt));


// // // let myarr2 = [11,"hello",5,"js",true,100,false,"java"];

// // // myarr2.forEach(function(data,index,arr){
// // //     console.log(data, index, arr);    
// // // }
// // // )

// // // const myarr3 = [11,22,33,44,55,66,77];

// // // myarr3.forEach((ele,index,array)=>console.log(ele,index,array));

// // // // Map()

// // // let myarr4 = [1,2,3,4,5]
// // // const newarr4 = myarr4.map(num => num*2)
// // // console.log(newarr4);


// // // // TASK

// // // 1. Create a new array by multiplying each number from a given array by 2.
// // let myarr1 = [1,2,3,4,5,6,7,8,9,10];
// // const newarr1 = myarr1.map(num1 => num1 * 2);
// // console.log(newarr1, "multiplyied each number from a given array by 2");

// // // 2. Print all elements of an array in uppercase.
// // let myarr2 = ["hello", "world", "java", "mern"];
// // myarr2.forEach(upper => console.log(upper.toUpperCase()))

// // // 3. Calculate and print the sum of all numbers in an array.
// // let myarr3 = [2,4,6,8,10];
// // const newarr3 = myarr3.reduce((acc,sum)=>{
// //     return acc + sum
// // },0)
// // console.log(newarr3);

// // // 4. Add a prefix to each name in an array and return a new array.
// // let myarr4 = ["santhosh","john","maddy"];
// // const newarr4 = myarr4.map((prefix)=>{
// //     return "Mr." +  prefix
// // })
// // console.log(newarr4);
  
// // // 5. Create a new array containing the square of each number from a given array.
// // let myarr5 = [2,4,6,8,10];
// // const newarr5 = myarr5.map(square => square*square)
// // console.log(newarr5);

// // // 6. Print only the numbers from an array that are greater than a certain threshold.
// // let myarr6 = [5,10,15,20,25,30,35,40,45,50]
// // myarr6.forEach(threshold => {
// //     if (threshold > 20)
// //         console.log(threshold);
// // })

// // // 7. Convert each number in an array into a string with a currency symbol and return the new array.
// // let myarr7 = [1,2,3,4,5];
// // const newarr7 = myarr7.map(symbol => {
// //     return "$" + symbol
// // })
// // console.log(newarr7);

// // // 8. Create a new array by multiplying each number by a specific factor.
// // let myarr8 = [1,2,3,4,56,7,8,9,10]
// // const newarr8 = myarr8.map(num2 => num2 * 4)
// // console.log(newarr8);

// // // 9. Create a new array containing the length of each string from a given array.
// // let myarr9 = ["apple","grape", "banana","orange"]
// // const newarr9 = myarr9.map(str => str.length)
// // console.log(newarr9);
  
// // // 10. Count how many numbers in an array meet a specific condition and print the count.
// // let myarr10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// // let count = 0;
// // myarr10.forEach((arr)=>{
// // if(arr % 2 == 1){
// //     count = count + 1
// // }
// // })
// // console.log(count);


// // Filter()

// let myarr1 = [1,2,3,4,5,6,7,8,9,10]
// const newarr1 = myarr1.filter((num)=> {
//     return num % 2 == 1
// })
// console.log(newarr1);

// let myarr2 = [5,10,15,20,25,30,35,40,45,50]
// const newarr2 = myarr2.filter((num1)=>{
//     return num1 % 8 == 0 && num1 % 5 ==0
// })
// console.log(newarr2);

// let myarray1 =[1,12,6,20,3,,15]
// const newarray1 = myarray1.filter((number)=>{
//     return number > 10
// })
// console.log(newarray1);

// // Reduce()

// let myarr3 = [1,2,3,4,5,6,7,8,9,10]
// const newarr3 = myarr3.reduce((acc,num2)=> {
//     return num2 + acc
// }, 0)
// console.log(newarr3);

// let myarr4 = [1,2,3,4,5,6,7,8,9,10]
// const newarr4 = myarr4.reduce((acc,num3)=> {
//     return num3 - acc
// }, 0)
// console.log(newarr4);

// let myarray2 = [2,3,4]
// const newarray2 = myarray2.reduce((accu,number1)=>{
//     return accu * number1
// },)
// console.log(newarray2);

// // For Of
// myarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for(const i of myarray) {
//     if (i==14){
//         continue
//     }
//     console.log(i);
// }


 // Task

// 1. Given an array of numbers, use filter to return only numbers greater than 50.
let arr1 =[10,20,30,40,50,60,70,80,90,100];
const newarr1 = arr1.filter((num1)=>{
    return num1 > 50
})
console.log(newarr1);

// 2. From an array of strings, use filter to return words that start with the letter "a".
let arr2 = ["apple", "orange", "avacado", "banana", "amla"]
const newarr2 = arr2.filter((letter)=>{
    return letter.startsWith("a")
})
console.log(newarr2);

// 3. Given an array of objects with an age property, use filter to return users older than 18.
let arr3 = [
    {name:"sandy", age:20},
    {name:"john", age:16},
    {name:"kavin", age:22}
]
const newarr3 = arr3.filter((age)=>{
    return age.age > 18

})
console.log(newarr3);


// 4. Use filter to remove all negative numbers from an array.
let arr4 = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
const newarr4 = arr4.filter((num2)=>{
    return num2 >= 0
})
console.log(newarr4);

// 5. From an array containing mixed data types, use filter to return only string values.
let arr5 = ["hello", 2, true, "world", false, 25, 50]
const newarr5 = arr5.filter((str)=>{
    return str.toString()
})
console.log(newarr5);


// 6. Given an array of numbers, use reduce to find the total sum of all elements.
let arr6 = [1,2,3,4,5,6,7,8,9,10]
const newarr6 = arr6.reduce((acc,num4)=>{
    return num4 + acc
}, 0)
console.log(newarr6);

// 7. Use reduce to find the largest number in an array.
let arr7 = [12,100,25,138,34,245,55,100,156];
const newarr7 = arr7.reduce((acc,num5)=>{
    if (acc > num5){
        return acc
    }else{
        return num5
    }
},0)
console.log(newarr7);

// 8. From an array of objects with a salary property, use reduce to calculate the total salary.
let arr8 = [
    {name:"alpha", salary:10000},
    {name:"beta", salary:20000},
    {name:"gamma", salary:30000}
]
const newarr8 = arr8.reduce((acc,tot)=>{
    return acc + tot.salary
},0)
console.log(newarr8);

// 9. Use reduce to count how many elements are in an array without using length.
let arr9 = [1,2,3,4,5,6,7,8];
const newarr9 = arr9.reduce((acc)=>{
    return acc+1
},0)
console.log(newarr9);

// 10. From an array of numbers, use reduce to separate even and odd numbers into two arrays.
let arr10 = [1,2,3,4,5,6]
let evenarr10 = []
let oddarr10 = []
const newarr10 = arr10.filter((num10)=> {
     if(num10 % 2 == 0){
        evenarr10.push(num10)
    }else{
        oddarr10.push(num10)
    }
})
console.log(evenarr10);
console.log(oddarr10);


// 11. Given an array of numbers, iterate using for...of and print each value.
let arr11 = [1,2,3,4,5];
for (const x of arr11) {
    console.log(x);
}

// 12. Use for...of to calculate the sum of all numbers in an array.
let arr12 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sum = 0;
for(const i of arr12) {
    sum = sum + i
}
console.log(sum);

// 13. From an array of strings, use for...of to find the longest string.

// 14. Use for...of to count how many numbers in an array are greater than 10.
let arr14 = [1,4,5,6,10,15,20,24,28,37];
let count = 0;
for (const z of arr14) {
    if (z>10){
        count++
    }
}
console.log(count);

// 15. From an array of objects, use for...of to extract all values of a specific property.

