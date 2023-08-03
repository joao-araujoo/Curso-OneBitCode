import { Character } from "Character.js";
import { Thief } from "Thief.js";
import { Mage } from "Mage.js";
import { Warrior } from "Warrior.js";

const personagem = new Character('Personagem', 50, 30, 20)
const ladrao = new Thief('Ladrão', 30, 30, 15)
const mago = new Mage('Mago', 40, 30, 30, 10)
const guerreiro = new Warrior('Guerreiro', 60, 40, 20, 10)

personagem.atacar(mago)