const Animal = require("./Animal");

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

module.exports = Bird;