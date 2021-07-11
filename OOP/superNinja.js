class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 200;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log("My name is :" + this.name);
    }
    showStats() {
        console.log("My name is :" + this.name, "Strength:" + this.strength, "Speed:" + this.speed, "Health:" + this.health);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja { //create a class Sensei that inherits from the Ninja class
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10; //add an attribute: wisdom - default to 10
    }
    speakWisdom() { //create a method: speakWisdom()
        super.drinkSake();
        console.log("speakWisdom");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();