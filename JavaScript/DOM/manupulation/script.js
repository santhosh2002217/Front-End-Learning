// // Get Element By ID (With TextContent and Inner HTML)
// let para = document.getElementById("content")
// para.textContent = "I am Learning DOM"
// // para.innerHTML = "I am Learning <h2>DOM</h2>"

// // Get Element By ClassName
// document.getElementsByClassName("btn")[1].textContent = "button" 

// // Get Element By Query Selector
// document.querySelector("#btn").innerHTML = "success"
// document.querySelector(".btn").innerHTML = "success"

// // Get Element By Tag Name
// document.getElementsByTagName("h3")[0].textContent = "DOM Tutorial"

// Get Element By Query Selector All
// let mybtn = document.querySelectorAll(".btn")
// console.log(mybtn);
// mybtn.forEach((ele)=>{
//     ele.textContent = "success"
// })

// HTML DOM - CSS
let mybtn = document.querySelectorAll(".btn")
mybtn.forEach((btn)=>{
    btn.style.height = "50px"
    btn.style.width = "80px"
    btn.style.padding = "10px"
    btn.style.color = "black"
    btn.style.borderRadius = "20px"
    btn.style.backgroundColor = "red"
    btn.style.cursor = "pointer"
})

// Setting Attribute
let img = document.getElementById("img-tag")
img.setAttribute("src","/images/meetings.png")

// Events in DOM
let mypara = document.querySelector("#content")

let myonclick = document.getElementsByClassName("btnn")[0]

myonclick.onclick = () => {
    mypara.textContent = "Welcome To DOM"
    myonclick.style.color = "white"
    myonclick.style.backgroundColor = "red"
    myonclick.style.borderRadius = "10px"
}
