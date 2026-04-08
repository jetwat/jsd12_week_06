
// // Execution
// // Assign difference parameter objects with 'Animal' mold. 
// const animal1 = new Animal("Simba", "lion");
// const animal2 = new Animal("Mumu", "cat");
// const animal3 = new Animal("Pepper", "cat");

// // try to use methods of the objects created.
// animal1.makeSound();
// animal1.eat();
// animal1.eat();
// animal2.name;

// // Assign difference parameter objects with 'Animal' mold. 
// const mammal1 = new Mammal("Nick", "fox", "orange");
// const bird1 = new Bird("Happy", "catbird", "92 cm");

// // try to use methods of the objects created.
// mammal1.makeSound();
// mammal1.eat();
// bird1.makeSound();

// ================================================================== //
// Execution
const Zoo = require("./Zoo.js");
const Animal = require("./animals/Animal.js");
const Bird = require("./animals/Bird.js");
const Mammal = require("./animals/Mammal.js");

console.log(Zoo);

const myZoo = new Zoo("The JS Terminal Zoo");

console.log(myZoo);

// create instances of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const exceed = new Bird("Happy", "catbird", "92 cm");
const baloo = new Mammal("Baloo", "Bear", "Brown");

// console.log(baloo);

myZoo.addAnimal(leo);
myZoo.addAnimal(exceed);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();

// ================================================================== //