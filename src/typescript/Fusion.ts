import { Loader } from "./loader/Loader";
import { Demon } from "./types/Demon";
import { Race } from "./types/Race";

class Fusion {
    fuse(name:String):String {
        // first find the demon they want
        let loader = new Loader();
        loader.load();

        let desiredDemon = loader.demons.find(demon => demon.name == name);

        // get the demon's family
        let demonFamily = this.getDemonFamily(loader.demons,desiredDemon.race);

        // get the fusion range
        let desiredDemonIndex = demonFamily.findIndex(demon => demon.name == desiredDemon.name);

        let fusionRangeLower = 2;
        if (desiredDemonIndex !=0) {
            fusionRangeLower = demonFamily[desiredDemonIndex - 1].level  * 2;
        }

        let fusionRangeUpper = 200;
        if (desiredDemonIndex != demonFamily.length - 1) {
            fusionRangeUpper = desiredDemon.level * 2 - 1;
        }


        // now to find possible fusions
        // for every possible family combination in the desired demon
        //      for every demon in family 1
        //          for every demon in family 2
        //              if (demon1.level + demon2.level within fusion range) return combination
        
        let possibleCombinations = "";

        desiredDemon.familyCombinations.forEach(fc => {
            let family1 = this.getDemonFamily(loader.demons, fc.family1);
            let family2 = this.getDemonFamily(loader.demons, fc.family2);
            family1.forEach(demon1 => {
                family2.forEach(demon2 => {
                    let combinedLevel = demon1.level + demon2.level;
                    if (fusionRangeLower <= combinedLevel && combinedLevel <= fusionRangeUpper) {
                        possibleCombinations += "[" + demon1.name + ", " + demon2.name + "]";
                    }
                })
            })
        });
        if (possibleCombinations.length == 0) {
            possibleCombinations = "No possible combinations";
        }
        return possibleCombinations;
    }

    getDemonFamily(demons: Demon[], race: Race) : Demon[] {
        return demons
        .filter(demon => demon.race == race)
        .sort((d1, d2) => {
            if (d1.level > d2.level) return 1;
            if (d1.level < d2.level) return -1;
            return 0;
        });
    }
}

let fusion = new Fusion();
console.log(fusion.fuse("Alp"));
