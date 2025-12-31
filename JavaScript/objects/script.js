// Objects

const MyInfo = {
    name: "santhosh",
    DOB: "20-10-2002",
    age: 23,
    dept: "Agri",
    course: "mern stack",
    place: "puducherry",
    status: "active",
    count: 30,
}

// keys, values, entries access in objects
console.log(Object.keys(MyInfo), "MyInfo keys");
console.log(Object.values(MyInfo), "MyInfo values");
console.log(Object.entries(MyInfo), "MyInfo entries");

// for looping
for (let x in MyInfo){
    console.log(x, MyInfo[x], "looping in objects");    
}

// dot notation
console.log(MyInfo.name, "dot notation");
console.log(MyInfo.course, "dot notation");
console.log(MyInfo.status, "dot notation");
console.log(MyInfo.place, "dot notation");

// bracket notation
const {name, age, place} = MyInfo
console.log(age, "bracket notation");
console.log(place, "bracket notation");

console.log(MyInfo["course"]);

// destructure property
const {DOB, course, ...NewMyInfo} = MyInfo
console.log(MyInfo), "MyInfo";
console.log(NewMyInfo, "NewMyInfo");










