import { Race } from "./Race";

class FamilyCombination {
    family1: Race;
    family2: Race;

    constructor(family1: Race, family2: Race) {
        this.family1 = family1;
        this.family2 = family2
    }

    static getInstance(family1:Race, family2:Race): FamilyCombination {
        return new FamilyCombination(family1, family2);
    }
}

export { FamilyCombination };