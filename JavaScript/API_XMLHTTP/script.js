// const myhttp = new XMLHttpRequest()  
// myhttp.open("GET","https://jsonplaceholder.typicode.com/todos/")
// myhttp.onload = () =>{
//     console.log(myhttp.responseText);   
// }
// myhttp.send()


const myapi = new XMLHttpRequest()
myapi.open("GET","https://official-joke-api.appspot.com/random_joke")
myapi.onload = ()=>{
    console.log(myapi.responseText);
}
myapi.send()