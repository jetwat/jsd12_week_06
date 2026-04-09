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

module.exports = Animal;