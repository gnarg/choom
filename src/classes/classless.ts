import Klass from "./klass";
import Table from '../tables/table';
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class Classless extends Klass {
    klass = "Street Punk";
    agility;
    knowledge;
    presence;
    strength;
    toughness;
    hp;

    constructor() {
        super()
        this.stuff = this.stuff.concat([
            new Table(weapons).lookup(11),
            new Table(armor).lookup(2),
        ]);

        const bonus = [2, 2, 0, 0, 0].sort(() => Math.random() - 0.5);
        this.agility = this.rollAbility(bonus[0]);
        this.knowledge = this.rollAbility(bonus[1]);
        this.presence = this.rollAbility(bonus[2]);
        this.strength = this.rollAbility(bonus[3]);
        this.toughness = this.rollAbility(bonus[4]);
        this.hp = this.roll(8) + this.toughness;
    }
}
