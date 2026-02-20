// class Car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     start() {
//         console.log(`${this.brand} ${this.model} is starting...`);
//     }
// }

// a constructor is a special function or method used as a blueprint to create and initialize multiple objects with similar properties and methods

// Class
// class Animal {
//   // Constructor with Attributes or Data
//   constructor(colour, sound) {
//     this.colour = colour;
//     this.sound = sound;
//   }

//   animalsound() {
//     console.log(`I make ${this.sound} sound`);
//   }
// }

// // Object
// Cow = new Animal("White", "Cowsound");
// console.log(Cow.colour);
// Cow.animalsound();

// Inheritance lets a child class use properties and methods of a parent class, so you don’t have to rewrite code

// Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
// super is used in a child class to refer to its parent class.
class AnotherPerson extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
}

p1 = new AnotherPerson("Js", 25, "A+");
console.log(p1.grade);



// Create a JavaScript class called `Car` with the following specifications:
// 1. Constructor (`constructor`)
// * Takes three parameters: `make` (string), `model` (string), and `year` (number).
// * Initializes these as properties of the class.
// 2. Methods:
// * `displayInfo()` → Prints all the car’s details as: `"Car: <year> <make> <model>"`
// * `age(currentYear)` → Returns the age of the car: `currentYear - year`
// 3. Tasks to perform:
// a. Create **two objects** of the `Car` class with different details.
// b. Call the `displayInfo()` method for both objects.
// c. Call the `age()` method for both objects and print the car’s age assuming the current year is `2026`.
// d. Access the `make` and `model` properties directly for both objects and print them.

class car {
    constructor(year,make,model){
        this.year = year
        this.make = make;
        this.model = model;
    }
    displayInfo(){
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
    age(){
        return `2026-${this.year}`      
    }
}

const car1 = new car(2016, "Toyota", "Fortuner")
const car2 = new car(2022, "BMW", "M4")

car1.displayInfo()
car2.displayInfo()

// console.log(car1.age());
// console.log(car2.age());

console.log(car1.make,car1.model);
console.log(car2.make,car2.model);


// class Animal {
//   speak() {
//     console.log("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak(); // Inherited
// d.bark();




