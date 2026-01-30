// // Set Time Out
// console.log("Task one");
// // setTimeout(function, delay);
// setTimeout(() => {
//     alert("Hello Good Morning")
// },1000)
// console.log("Task two");

// Set Interval
// setInterval(function, interval);
// let count = 1;
// let myinterval = setInterval(() => {
//   console.log("Count:", count);
//   count++;
// }, 5000);

// Clear Interval
// setTimeout(()=>{
//     clearInterval(myinterval)
// }, 10000)

// 1. Wait for 3 seconds before starting any task.
// 2. After 3 seconds, start a countdown from 5.
// 3. Print one number every 1 second.
// 4. When the countdown reaches 0:
//    - Stop the interval using clearInterval()
//    - Print "Task Completed"
// 5. Make sure no timer continues running after completion.

console.log("Waiting 3 seconds before starting task");

setTimeout(()=>{
    let count = 5;
    console.log("countdown started:");    

let MyInterval = setInterval(()=>{
    console.log("count:", count);
    count--
},1000)

setTimeout(()=>{
    clearInterval(MyInterval)
    console.log("Task Completed");

},6000)
},3000)
