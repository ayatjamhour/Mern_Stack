class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
//for unit
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            console.log(this.name + "attacked" + target.name + "for" + this.power);
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}
//for effect
class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }


    play(target) {
        if (target instanceof Unit) {
            // implement card text here
            if (this.stat == "resilience") {
                if (this.name == "Hard Algorithem") {
                    target.res += this.magnitude;
                }
                else if (this.name == "Unhandled Promise Rejection") {
                    target.res -= this.magnitude;
                }
                else if (this.stat == "power") {
                    target.power += this.magnitude;
                }
            }

        } else {
            throw new Error("Target must be a unit!");
        }
    }
}
//redBeltNinja
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
// hard algo
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase the target's resiliance by 3", "resiliance", 3);
hardAlgorithm.play(redBeltNinja);
// blackBeltNinja
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
// unhandled Promise Reject
const unhandledPromReject = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resiliance", -2);
unhandledPromReject.play(redBeltNinja);
//pair Programming
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);

console.log(redBeltNinja);
console.log(blackBeltNinja);