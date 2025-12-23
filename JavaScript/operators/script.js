// OPERATORS

// ARITHMETIC OPERATORS

// (+) operator
// let a = 10;
// let b = 50;
// console.log(a+b, "ITS ADDITION");

// // (-) operator
// let c = 20;
// let d = 10;
// console.log(c-d, "ITS SUBTRACTION");

// // (*) operator
// let e = 20;
// let f = 30;
// console.log(e*f, "ITS MULTIPLICATION");

// // (/) operator
// let g = 100;
// let h = 50;
// console.log(g/h, "ITS DIVISION");

// // (%) operator
// let i = 250;
// let j = 10;
// console.log(i%j, "ITS MODULUS");

// // (**) operator
// let x = 5;
// let y = 2;
// console.log(x**y, "ITS EXPONENTIATION");


// // (++) increment operator
// let k = 50;
// console.log(k, "BEFORE INCREMENT");
// k++;
// console.log(k, "AFTER INCREMENT");

// // (--) decrement operator
// let l = 100;
// console.log(l, "BEFORE DECREMENT");
// l--;
// console.log(l, "AFTER DECREMENT");


// // ASSINGMENT OPERATOR

// // (=) operator
// let num1 = 10;
// console.log(num1,"equal");

// // (+=) operator
// let num2 = 80;
// let num3 = 70;
// console.log(num2+=num3,"add and equal ");

// // (-=) operator
// let num4 = 30;
// let num5 = 20;
// console.log(num4-=num5,"subtract and equal");

// // (*=) operator
// let num6 = 40;
// let num7 = 20;
// console.log(num6*=num7,"multiply and equal");

// // (/=) operator
// let num8 = 100;
// let num9 = 20;
// console.log(num8/=num9,"divide and equal");

// // (%=) operator
// let num10 = 50;
// let num11 = 20;
// console.log(num10%=num11,"modulus and equal");


// // COMPARSION OPERATOR

// // (==) operator
// let m = 10;
// let n = "10";
// console.log(m==n,"equal(loose)");

// // (===) operator
// let o = 30;
// let p = "30";
// console.log(o===p,"strict equal");

// // (!=) operator
// let q = 50;
// let r = 30;
// console.log(q!=r,"not equal");

// // (!==) operator
// let s = 50;
// let t = "50";
// console.log(s!==t,"strict not equal");

// // (>) operator
// let u = 10;
// let v = 20;
// console.log(u>v,"greater than");

// // (<) operator
// let w = 30;
// let z = 20;
// console.log(u<v,"less tham");

// // (>=) operator
// let num12 = 10;
// let num13 = 20;
// console.log(num12>=num13,"greater or equal");

// // (<=) operator
// let num14 = 60;
// let num15 = 50;
// console.log(num14<num15,"less or equal");


// // LOGICAL OPERATORS

// // AND operator
// console.log(10>5 && 10<20, "and operator");

// // OR operator
// console.log(100==100 || 20<30, "or operator");

// // NOT operator
// console.log(!(10<25),"not operator" );


// STRING OPERATORS

// Concatenation Operators
const firstname = "santhosh";
const middlename = " ";
const lastnamee = "kumar";

console.log(firstname+middlename+lastnamee );

// Concatenation Assignment (+=)
let name = "vijay";
name += " kumar";

console.log(name);

// Comparison Operators (==, ===, !=, !==, <, >, <=, >=)
console.log("a"!="A");
console.log("c"==="c");
console.log("World"==="world");

// Template Literal Operator (backticks `)
const welcome = "Good Morning";
console.log(`${welcome} Vignesh `);

// String Length Operator (.length)
const letter = "Underground";
console.log(letter.length);

// Accessing Characters (string[index])
const animal = "Lion"
console.log(animal[0]);


// String Methods

// toUpperCase()
const a = "hello"
console.log(a.toUpperCase());

// toLowerCase()
let x = "WORLD"
console.log(x.toLowerCase());


// Type Conversion

// 1. Explicit - manual By Developer
let w = "hi"
console.log(typeof(w));
let num1 = 100
console.log(typeof(num1));


let total = w + num1;
console.log(total);
console.log(typeof(total));


// 2. Implicit - By Js Engine (Coersion)
let num = 50
console.log(typeof(num));

let anothernum = String(num)
console.log(anothernum);
console.log(typeof(anothernum));









