// Math method

console.log(Math.PI);
console.log(Math.sqrt(100));

console.log(Math.round(1.9));
console.log(Math.floor(1.9));
console.log(Math.ceil(-1.2));


console.log(Math.trunc(-15.25));

console.log(Math.pow(2,5));
console.log(2**10);

console.log(Math.abs(-22.23));

console.log(Math.max(2,4,6,8,10));
console.log(Math.min(2,4,6,8,10));

console.log(Math.random());

console.log(Math.floor(100000 + Math.random() * 900000));
console.log(Math.floor(1000 + Math.random() * 9000));

console.log(Math.ceil(100000 + Math.random() * 900000));
console.log(Math.ceil(1000 + Math.random() * 9000));

console.log(Math.trunc(100000 + Math.random() * 900000));
console.log(Math.trunc(1000 + Math.random() * 9000));


// Date method

let mydate_time = new Date()
console.log(mydate_time);

console.log(mydate_time.getDate());
console.log(mydate_time.getDay());
console.log(mydate_time.getFullYear());
console.log(mydate_time.getHours());
console.log(mydate_time.getMilliseconds());
console.log(mydate_time.getMinutes());
console.log(mydate_time.getMonth());
console.log(mydate_time.getSeconds());
console.log(mydate_time.getTime());


let newdate_time = new Date("2009-10-29")
console.log(newdate_time);

newdate_time.setFullYear("2007");
console.log(newdate_time);

newdate_time.setDate("30")
console.log(newdate_time);

