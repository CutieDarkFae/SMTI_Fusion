import { Demon } from "../types/Demon";
import { Race } from "../types/Race";
import { FamilyCombination } from "../types/FamilyCombination";
import { Alignment } from "../types/Alignment";
import { Species } from "../types/Species";

class Loader {
    demons: Demon[];
    familyMap:Map<Race, FamilyCombination[]>;
    
    load() {
        this.familyMap = new Map<Race, FamilyCombination[]>();
        this.demons = [];

        this.familyMap.set(Race.DragonKing, [
            FamilyCombination.getInstance(Race.Vile, Race.Dragon),
            FamilyCombination.getInstance(Race.Divine, Race.Nocturne),
            FamilyCombination.getInstance(Race.Raptor, Race.EarthMother),
            FamilyCombination.getInstance(Race.Fairy, Race.EvilDragon),
            FamilyCombination.getInstance(Race.NationRuler, Race.FallenAngel),

            FamilyCombination.getInstance(Race.Yoma, Race.Divine),
            FamilyCombination.getInstance(Race.Avian, Race.Beast),
            FamilyCombination.getInstance(Race.EarthElemental, Race.Guardian),
            FamilyCombination.getInstance(Race.HolyBeast, Race.Dragon),
            FamilyCombination.getInstance(Race.EarthMother, Race.Beast),

            FamilyCombination.getInstance(Race.Yoma, Race.EvilDragon),
            FamilyCombination.getInstance(Race.Avian, Race.FallenAngel),
            FamilyCombination.getInstance(Race.EarthElemental, Race.NationRuler),
            FamilyCombination.getInstance(Race.NationRuler, Race.Beast),
            FamilyCombination.getInstance(Race.FallenAngel, Race.Dragon),

            FamilyCombination.getInstance(Race.Divine, Race.Raptor),
            FamilyCombination.getInstance(Race.Raptor, Race.Beast),
            FamilyCombination.getInstance(Race.Fairy, Race.NationRuler),
            FamilyCombination.getInstance(Race.NationRuler, Race.Brute),
            FamilyCombination.getInstance(Race.Dragon, Race.Foul),
        ]);
        this.familyMap.set(Race.Yoma, [
            FamilyCombination.getInstance(Race.Divine, Race.Brute),
            FamilyCombination.getInstance(Race.DemiGod, Race.Wilder),
            FamilyCombination.getInstance(Race.Fairy, Race.EarthMother),

            FamilyCombination.getInstance(Race.WildBird, Race.Haunt),
            FamilyCombination.getInstance(Race.DemonGod, Race.Tyrant),
            FamilyCombination.getInstance(Race.Fairy, Race.FallenAngel),

            FamilyCombination.getInstance(Race.EarthElemental, Race.Beast),
            FamilyCombination.getInstance(Race.Nocturne, Race.Haunt),
            FamilyCombination.getInstance(Race.Fairy, Race.Brute),

            FamilyCombination.getInstance(Race.EarthElemental, Race.FallenAngel),
            FamilyCombination.getInstance(Race.Fairy, Race.DragonKing),
            FamilyCombination.getInstance(Race.FallenAngel, Race.Haunt),
        ]);
        this.familyMap.set(Race.Nocturne, [
            FamilyCombination.getInstance(Race.HeavenlyGod, Race.Raptor),
            FamilyCombination.getInstance(Race.Brute, Race.Dragon),
            FamilyCombination.getInstance(Race.Divine, Race.EarthElemental),
            FamilyCombination.getInstance(Race.FallenAngel, Race.Wilder),
            FamilyCombination.getInstance(Race.Tyrant, Race.Wilder),

            FamilyCombination.getInstance(Race.Avian, Race.Yoma),
            FamilyCombination.getInstance(Race.DemonGod, Race.Fairy),
            FamilyCombination.getInstance(Race.Dragon, Race.Femme),
            FamilyCombination.getInstance(Race.EarthMother, Race.Yoma),

            FamilyCombination.getInstance(Race.Beast, Race.FallenAngel),
            FamilyCombination.getInstance(Race.DemiGod, Race.Femme),
            FamilyCombination.getInstance(Race.Fairy, Race.Reaper),
            FamilyCombination.getInstance(Race.DragonKing, Race.Wilder),

            FamilyCombination.getInstance(Race.Beast, Race.Tyrant),
            FamilyCombination.getInstance(Race.Destroyer, Race.FallenAngel),
            FamilyCombination.getInstance(Race.Fairy, Race.Tyrant),
            FamilyCombination.getInstance(Race.DragonKing, Race.Yoma),
        ]);

        this.demons.push(new Demon(
            "Naga", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            24,
            this.familyMap.get(Race.DragonKing)
        ));

        this.demons.push(new Demon(
            "Succubus", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            37,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Kinnari", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            28,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Raja Naga", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            40,
            this.familyMap.get(Race.DragonKing)
        ));
        
        this.demons.push(new Demon(
            "Nozuchi", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            14,
            this.familyMap.get(Race.DragonKing)
        ));
        
        this.demons.push(new Demon(
            "Mizuchi", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            31,
            this.familyMap.get(Race.DragonKing)
        ));

        this.demons.push(new Demon(
            "Vouivre", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            48,
            this.familyMap.get(Race.DragonKing)
        ));
        
        this.demons.push(new Demon(
            "Vritra", 
            Alignment.Neutral,
            Species.Dragon,
            Race.DragonKing,
            56,
            this.familyMap.get(Race.DragonKing)
        ));
        
        this.demons.push(new Demon(
            "Apsaras", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            8,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Isora", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            14,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Dis", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            23,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Onkot", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            37,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Jinn", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            44,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Ganesha", 
            Alignment.Law,
            Species.Magica,
            Race.Yoma,
            58,
            this.familyMap.get(Race.Yoma)
        ));

        this.demons.push(new Demon(
            "Alp", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            8,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Empusa", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            14,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Lilim", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            20,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Fomorian", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            27,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Incubus", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            31,
            this.familyMap.get(Race.Nocturne)
        ));
 
        this.demons.push(new Demon(
            "Black Frost", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            42,
            this.familyMap.get(Race.Nocturne)
        ));
   
        this.demons.push(new Demon(
            "Kaiwan", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            47,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Loa", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            52,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Queen Mab", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            57,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
            "Nyx", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            72,
            this.familyMap.get(Race.Nocturne)
        ));

        this.demons.push(new Demon(
           "Lilith", 
            Alignment.Neutral,
            Species.Magica,
            Race.Nocturne,
            92,
            this.familyMap.get(Race.Nocturne)
        ));
    }
}

export { Loader };