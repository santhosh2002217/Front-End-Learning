// Array Task

// 1. Remove the first element using shift()
let arr1 = ["hello", "welcome", "good morning", 1, 2, 3];
arr1.shift();
console.log(arr1, "Shift");

// 2. Add an element at the start using unshift()
let arr2 = ["hello", "welcome", "good morning"];
arr2.unshift(1,2,true);
console.log(arr2, "Unshift");

// 3. Loop through an array using a for loop and print items
let arr3 = [1, 2,"hello", "world", false];
for(let x = 0; x < arr3.length; x++){
    console.log(arr3[x], "for loop");
}

// 4. Delete an element using the delete keyword
const arr4 = ["apple", "banana", "mango", "stawberry"];
delete arr4 [2];
console.log(arr4, "Delete");

// 5. Remove items using splice(start, count)
let arr5 = ["cat", "dog", "parrot", "rabbit", "fish", "turtle"];
arr5.splice(1,4);
console.log(arr5, "Remove Splice");

// 6. Insert items using splice(start, 0, item)
let arr6 = ["cat", "dog", "parrot", "rabbit", "fish", "turtle", "hen", "sheep"];
arr6.splice(5,0, "cow");
console.log(arr6, "Insert Splice");

// 7. Replace items using splice(start, count, newItem)
let arr7 = ["cat", "dog", "parrot", "rabbit", "fish", "turtle", "hen", "sheep"];
arr7.splice(2,4,"cow", "mouse");
console.log(arr7, "Replace Splice");

// 8. Copy part of an array using slice(start, end)
let arr8 = ["lion", "elephant", "deer", "tiger", "cheetah"];
let newarr8 = arr8.slice(1,4);
console.log(newarr8,"slice");

// 9. Convert array to a string using join()
let arr9 = ["java", "script", "is", "a", "compiled", "language"];
let newarr9 = arr9.join(" ");
console.log(newarr9, "join");
console.log(typeof(newarr9));

// 10. Combine two arrays using concat()
let arr10 = [1,2,3,4,5];
let anotherarr10 = [6,7,8,9,10];
let newarr10 = arr10.concat(anotherarr10);
console.log(newarr10, "concat");
 
// 11. Loop through array using forEach() and log each item

// 12. Remove the last element using pop()
let arr12 = ["hello", "world", "welcome", "java"];
arr12.pop();
console.log(arr12,"pop");

// 13. Add an element to the end using push()
let arr13 = ["hello", "world", "welcome", "java"];
arr13.push("script", "frontend");
console.log(arr13,"push");

// 14. Find array length and print the last element
// let arr14 = ["mobile", "laptop", "desktop", "tab"];
//  console.log(arr14[], "Last element of the array");
 
// 15. Loop through an array using a while loop and print each item
let arr15 = [1, 2, 3, "one", "two", "three"];
let a = 0;
while(a < arr15.length){
    console.log(arr15[a], "while loop");
    a++
}