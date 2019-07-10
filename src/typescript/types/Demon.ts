import { Loader } from "../loader/Loader";
import { Alignment } from "./Alignment";
import { Species } from "./Species";
import { Race } from "./Race";
import { FamilyCombination } from "./FamilyCombination";

class Demon {
    name: String;
    alignment: Alignment;
    species: Species;
    race: Race;
    level: number;
    familyCombinations: FamilyCombination[];

    constructor( name: String,
        alignment: Alignment,
        species: Species,
        race: Race,
        level: number,
        familyCombinations: FamilyCombination[]
    ) {
        this.name = name;
        this.alignment = alignment;
        this.species = species;
        this.race = race;
        this.level = level;
        this.familyCombinations = familyCombinations;
    }
}

export { Demon };