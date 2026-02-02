// ClassList

// Add
// let mycontainer = document.getElementById("container")
// mycontainer.classList.add("container")

// let mybtn = document.getElementById("btn")
// mybtn.onclick = ()=>{
    // mycontainer.classList.add("container")
// }

// Remove
// let mycontainer = document.getElementById("container")
// mycontainer.classList.remove("container")
//  mybtn.onclick = ()=>{
    // mycontainer.classList.remove("container")
// }

// Contains
// let mycontainer = document.getElementById("container")
// let mybtn = document.getElementById("btn")

// mybtn.onclick = ()=>{
//     if(mycontainer.classList.contains("container")){
//         mycontainer.classList.remove("container")
//     }
//     else{
//         mycontainer.classList.add("container")
//     }
// }

// Toggle
// let mycontainer = document.getElementById("container")
// let mycontainer = document.getElementById("container")
// let mybtn = document.getElementById("btn")

// mybtn.onclick = ()=>{
//     mycontainer.classList.toggle("container")
// }

// Events In DOM Elements

// addEventListener

// let mycontainer = document.getElementById("container")
// let mybtn = document.getElementById("btn")

// mybtn.onclick = ()=>{
//     mycontainer.classList.add("container")
// }
// mybtn.onclick = ()=>{
//     mycontainer.style.color = "aqua"
// }
// console.log("renders no event");

// mybtn.addEventListener("click", () => {
//     mycontainer.classList.toggle("container")
// })
// mybtn.addEventListener("click", () => {
//     mybtn.style.color = "green"
// })
// mybtn.addEventListener("click", () => {
//     mycontainer.style.backgroundColor = "yellow"
//     mycontainer.style.color= "black"
// })
// console.log("renders all events");



// removeEventListener

// let mycontainer = document.getElementById("container")
// let mybtn = document.getElementById("btn")

// mybtn.onclick = ()=>{
//     mycontainer.classList.remove("container")
// }
// mybtn.onclick = ()=>{
//     mycontainer.style.color = "aqua"
// }
// console.log("renders no event");

// mybtn.removeEventListener("click", () => {
//     mycontainer.classList.toggle("container")
// })
// mybtn.removeEventListener("click", () => {
//     mybtn.style.color = "green"
// })
// mybtn.removeEventListener("click", () => {
//     mycontainer.style.backgroundColor = "yellow"
//     mycontainer.style.color= "black"
// })
// console.log("renders all events");