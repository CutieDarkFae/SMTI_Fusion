import { Fusion } from "./TypeScript/Fusion";

let fusion = new Fusion();
console.log(fusion.reverseFuse("Succubus").toString());
document.body.textContent = fusion.reverseFuse("Succubus").toString();