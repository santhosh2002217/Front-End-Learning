// Arrays and Objects Task

// 1. Destructure an object to extract the properties `name` and `age` from a given object.
const myobj = {
    name: "Santhosh",
    DOB: "20-10-2002",
    age: 23,
    status: "Active",
    course: "Mern"
}
const {name, age} = myobj;
console.log(name, "destructuring obj");
console.log(age, "destructuring obj");

// 2. Destructure an array to extract the first, second, and last elements.
const myarray = ["hello", "world", 2, true, 50];
const [first, second, third, fourth, last] = myarray;
console.log(first, "destructuring array");
console.log(second, "destructuring array");
console.log(last, "destructuring array");

// 3. Use the spread operator to merge two arrays into one combined array.
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let mergearr = [...arr1,...arr2];
console.log(mergearr, "spread operator to merge two arrays");

// 4. Clone an object using the spread operator.
const obj1 = {
    name: "Sandy",
    phno: 6374042634,
    location: "Puducherry"
}
const obj2 = {
    status: "active",
    course: "Mern"
}
const newobj = {...obj1,...obj2};
console.log(newobj, "clone object using the spread operator");

// 5. Destructure an object with renaming: extract `firstName` as `fname` and `lastName` as `lname`.
// const obj3 = {
//     firstName: "Santhosh",
//     lastName: "R"
// }
// obj3.firstName = ""

// 6. Use the rest operator in object destructuring to pick one property and group the rest into another variable.
const obj5 = {
    a:"apple", 
    b:"banana", 
    o:"orange", 
    g:"grapes", 
    s:"strawberry"
}
const {a,...rest} = obj5;
console.log(a);
console.log(rest, "rest operator in object destructuring");

// 7. Insert new elements into the middle of an array using the spread operator.
let arr3 = ["cat", "dog", "mouse","horse"];
let newarr3 = [...arr3.slice(0,2),"sheep",...arr3.slice(2)];
console.log(newarr3, "new elements into the middle of an array using the spread operator");


// 8. Use the spread operator to extend an array by adding new elements at the end.
let arr5 = [1,2,3,4,5];
let arr6 = [6,7,8,9,10];
let newarr = [...arr5,...arr6];
newarr.push(11,12,13,14,15);
console.log(newarr, "spread operator to extend an array by adding new elements at the end");
