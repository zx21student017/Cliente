import Persona from "./persona.js";

const persona1 = new Persona("Jose","Garcia","24");
const persona2 = new Persona("Ana","Garcia","42");

console.log(persona1.nombrecompleto() + "-" + persona2.nombrecompleto());