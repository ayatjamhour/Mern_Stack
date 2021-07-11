class Ninja { //Create a Ninja class
    constructor(name) {
        this.name = name;  // add an attribute: name
        this.health = 20;   //add an attribute: health
        this.speed = 3; //add a attribute: speed - give a default value of 3
        this.strength = 3; //  add a attribute: strength - give a default value of 3
    }

    sayName() { //add a method: sayName() - This should log that Ninja's name to the console
        console.log(this.name);
        return this;
    }

    showStats() { //add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        return this;
    }

    drinkSake() { // add a method: drinkSake() - This should add +10 Health to the Ninja
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();