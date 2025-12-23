// While loop

let a = 0;
while(a < 10){
    console.log(a);
    a++
}


let b = 10;

while(b < 20){
    if (b == 17){
        break
    }
    b++
    console.log(b, "while loop using break");   
}


let c = 50;

while (c < 90) {
    c++
    if (c == 75){
        continue
    }
    console.log(c, "while loop using continue");   
}


let d = 0;

while(d <= 10){
    if(d%2 == 0){
        console.log(d,"even numbers");
    }
    d++    
}


let e = 0;

while(e <= 20){
    if(e%2 == 1){
        console.log(e,"odd numbers");
    }
    e++    
}


let f = 0;
let sum = 0;

while (f <= 10 ) {
    sum = sum + f;
    f++
}
console.log(sum,"sum of first 10 numbers");


