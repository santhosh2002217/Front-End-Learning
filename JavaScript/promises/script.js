// Promise
// A Promise in JavaScript is an object that represents the result of an asynchronous operation (like API calls, timers, file loading, etc.).

// It has 3 states:
// Pending – Initial state (waiting)
// Fulfilled – Operation completed successfully
// Rejected – Operation failed


// const mypromise = new Promise((res, reject)=>{
//     setTimeout(()=>{
//         const success = true

//         if(success){
//             res("I am SUCCESS") 
//         }else{
//             reject("I am not Success")
//         }
//     },1000)   
// })

// mypromise
// .then((res)=>{
//     console.log(res);
// })
// .catch((reject)=>{
//     console.log(reject);
// })


// Promise chain
// let promise = new Promise((resolve) => {
//   resolve(5);
// });

// promise
//   .then((num) => num * 2)
//   .then((num) => num * 3)
//   .then((result) => console.log(result));


// Promise methods

// Promise.all()
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(values => console.log(values));
