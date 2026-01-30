// // https://jsonplaceholder.typicode.com

// // Syntax
// // fetch(url, [options])
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error('Error:', error));

// // Get Method (Read Method)
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // POST Method (Create)
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: 77,
//     title: "JavaScript",
//     body: "Learning fetch POST method"
//   }),
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // PUT or PATCH Method (update)
// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: 11,
//     title: "MERN Stack",
//     body: "Learning fetch POST method then advanced MERN"
//   }),
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Delete Method

// fetch("https://jsonplaceholder.typicode.com/posts/4", {
//     method: "DELETE"
// })
//   .then((response) => {
//     if (response.ok){
//         console.log("Successfully Deleted");
//     }
//   })


// Task with CRUD: https://jsonplaceholder.typicode.com/users

// Get Method (Read Method)
fetch(" https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);    
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("API Fetched");
})

// POST Method (Create)
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        id: 11,
        name:"Sandy",
        username:"sandy_12@",
        email:"sandy@email.com",
        address: {
            city: "puducherry",
            area: "lawspet"
        },
        company:"ocean academy"
    })  
})
.then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
   .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log("API Posted");
  })

// PUT or PATCH Method (update)
fetch("https://jsonplaceholder.typicode.com/users/2",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        id: 11,
        name:"Santhosh",
        username:"sandy_12@34",
        email:"sandy12@email.com",
        address: {
            city: "puducherry",
            area: "lawspet"
        },
        company:"ocean academy"
    })  
})
.then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
   .catch((error) => {
    console.log(error);
  })
  .finally(()=>{
    console.log("API Updated");
  })

  // Delete Method
  fetch(" https://jsonplaceholder.typicode.com/users/10", {
    method:"DELETE"
  })
  .then((res)=>{
    if (res.ok){
        console.log("API Deleted");
    }
  })