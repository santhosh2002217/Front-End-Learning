// const myobj = {
//     name: "Sandy",
//     age: 23,
//     course:"Mern Stack"
// }

// // For in Method

// for (x in myobj){
//     console.log(x, ":", myobj[x]);
// }

// // Object.keys Method
// Object.keys(myobj).forEach((data)=>{
//     console.log(data);
// })

// // Object.values Method
// Object.values(myobj).forEach((set)=>{
//     console.log(set);
// })

// // Object.entries Method
// Object.entries(myobj).forEach((totdata)=>{
//     console.log(totdata);
// })


// Task

const myobj = {
    name: "sandy",
    age: 23,
    country: "India",
    status: "active"
}

// Iterate over an object and print all keys and values.
Object.entries(myobj).forEach((key_value)=>{
    console.log(key_value);
})

// Iterate over an object and print only the keys.
Object.keys(myobj).forEach((key_value)=>{
    console.log(key_value);
})

// Iterate over an object and print only the values.
Object.values(myobj).forEach((key_value)=>{
    console.log(key_value);
})

// Count the total number of properties in an object.
let count = 0;
Object.keys(myobj)

// Check whether a given object is empty or not.