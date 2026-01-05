// Objects

// const MyInfo = {
//     name: "santhosh",
//     DOB: "20-10-2002",
//     age: 23,
//     dept: "Agri",
//     course: "mern stack",
//     place: "puducherry",
//     status: "active",
//     count: 30,
// }

// // keys, values, entries access in objects
// console.log(Object.keys(MyInfo), "MyInfo keys");
// console.log(Object.values(MyInfo), "MyInfo values");
// console.log(Object.entries(MyInfo), "MyInfo entries");

// // for looping
// for (let x in MyInfo){
//     console.log(x, MyInfo[x], "looping in objects");    
// }

// // dot notation
// console.log(MyInfo.name, "dot notation");
// console.log(MyInfo.course, "dot notation");
// console.log(MyInfo.status, "dot notation");
// console.log(MyInfo.place, "dot notation");

// // bracket notation
// const {name, age, place} = MyInfo
// console.log(age, "bracket notation");
// console.log(place, "bracket notation");

// console.log(MyInfo["course"]);

// // destructure property
// const {DOB, course, ...NewMyInfo} = MyInfo
// console.log(MyInfo), "MyInfo";
// console.log(NewMyInfo, "NewMyInfo");


// Spread Operator

// array
const num1 = [11,22,33,44,55,66];
const num2 = [77,88,99,111];

const combined1 = [...num1,...num2];
console.log(combined1, "spread operator");


const num3 = [1,2,3,4,5];
const num4 = [6,7,8,9,10];

const combined2 = [...num3,...num4];
console.log(combined2, "spread operator");

// object
const data1 = {name:"sandy", age:23, course:"mern stack"};
const data2 = {place:"pondy"}; 

const totaldata1 = {...data1,...data2};
console.log(totaldata1, "spread operator");


const data3 = {x:2, y:4, z:6};
const data4 = {w:8}; 

const totaldata2 = {...data3,...data4};
console.log(totaldata2, "spread operator");

// Rest Operator

// array
const [one, two,...rem] = ["one", "two", "third", "fourth"];
console.log(two);
console.log(rem, "rest operator");


const [a,b,...remaining] = ["apple", "grapes", "guava", "banana"];
console.log(a);
console.log(b);
console.log(remaining, "rest operator");


// Object
const {clas,section,...rest} = {clas:"IV", section:"c", grade:"A", marks:92};
console.log(clas);
console.log(section);
console.log(rest, "rest operator");

const {f,c,d,...final} = {a:1, b:2, c:3, d:4, e:5, f:6, g:7};
console.log(c);
console.log(final, "rest operator");













