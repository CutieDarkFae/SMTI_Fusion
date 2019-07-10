import { Demon } from "./Demon";

class DemonPair {
    demon1:Demon;
    demon2:Demon;

    constructor(demon1:Demon, demon2:Demon) {
        this.demon1 = demon1;
        this.demon2 = demon2;
    }
}

class FusionResult {
    name: String;
    combinations: DemonPair[];
    cost: number;

    constructor(name: String, combinations: DemonPair[], cost:number) {
        this.name = name;
        this.combinations = combinations;
        this.cost = cost;
    }

    toString():string {
        let result = "You can fuse a " + this.name + " with a cost of " + this.cost + " from the following combinations [";
        this.combinations.forEach(fr => {
            result += "[" + fr.demon1.name + ", " + fr.demon2.name + "],";
        });
        result += "]";
        return result;
    }
}

export { FusionResult, DemonPair };