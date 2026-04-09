// OOP is like a LEGO
// Keywords for deep understanding: Encapsulation, Inheritance, and Polymorphism

// ==================================================================== //
// Plain Object
// const lion = {
//     name: "Simba",
//     species: "lion",
//     makeSound: function() {
//         console.log(`${this.name} says: ROAR!!`)
//     }
// };

// lion.makeSound();

// ==================================================================== //
// The Class Template (Encapsulation)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this._hunger = 50; // Internal state (protected by _) เป็น Private เปลี่ยนค่าได้ด้วย method ในคอนเท็กซ์นี้เท่านั้น
    }
    
    getStatus() {
        if(this._hunger <= 0) return "Full";
        if(this._hunger <= 20) return "Satisfied";
        return "Hungry";
    }
    
    makeSound() {
        this._hunger += 2;
        console.log(`${this.name} made a sound! Hunger is now ${this._hunger}.`);
    }
    
    eat() {
        if (this._hunger <= 0) {
            console.log(`${this.name} is already full!`);
        } else {
            this._hunger -= 10
            console.log(`${this.name} the ${this.species} ate. Hunger is now ${this._hunger}.`);
        }
    }
}

// ==================================================================== //
// Assign difference parameter objects with 'Animal' mold. 
const animal1 = new Animal("Simba", "lion");
const animal2 = new Animal("Mumu", "cat");
const animal3 = new Animal("Pepper", "cat");

// try to use methods of the objects created.
animal1.makeSound();
animal1.eat();
animal1.eat();
animal2.name;

// ==================================================================== //
// Object instance
// const leo = new Animal("Leo", "lion");

// console.log(leo);
// console.log(leo._hunger);
// leo.eat();
// console.log(leo._hunger);

// ==================================================================== //
// specialized classes (inheritance)

class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species); // calls the parent constructor
        this.furColor = furColor;
    }
    groom() {
        console.log(`${this.name} is brushing their ${this.furColor} fur.`);
    }
}

class Bird extends Animal {
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan
    }
    
    // override parent method (polymorphism)
    makeSound() {
        this._hunger += 2;
        console.log(`${this.name} said "Aye Sir!". Hunger is now ${this._hunger}.`);
    }
}

// ==================================================================== //
// Assign difference parameter objects with 'Animal' mold. 
const mammal1 = new Mammal("Nick", "fox", "orange");
const bird1 = new Bird("Happy", "catbird", "92 cm");

// try to use methods of the objects created.
mammal1.makeSound();
mammal1.eat();
bird1.makeSound();

// ==================================================================== //

// Zoo Manager
// A class to hold and run our animal objects:

class Zoo {
  constructor(zooName) {
    this.zooName = zooName;
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.name} to the ${this.zooName}`);
  }

  showAllAnimals() {
    console.log(`\n--- Welcome to ${this.zooName} ---`);
    
    this.animals.forEach((animal) => {
        
        // Accessing properties and calling methods (choose one of the `console.log`)
        console.log(`Here -> ${animal}`);
        console.log("Here ->", animal);
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
        console.log(`Animal: ${animal.name} | Status: ${animal.getStatus()}`);
        // console.log(`Animal: ${animal.name}`); 
        
        animal.makeSound();
        animal.eat();
        console.log("-------------------");
    });
  }
}

// Execution

const myZoo = new Zoo("The JS Terminal Zoo");

// create instances of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const exceed = new Bird("Happy", "catbird", "92 cm");
const baloo = new Mammal("Baloo", "Bear", "Brown");

// console.log(baloo);

myZoo.addAnimal(leo);
myZoo.addAnimal(exceed);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();

// ==================================================================== //