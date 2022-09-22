import Klass from "./klass";
import Table from '../tables/table';
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class Classless extends Klass {
    klass = "Street Punk";
    agility = this.rollAbility();
    knowledge = this.rollAbility();
    presence = this.rollAbility();
    strength = this.rollAbility();
    toughness = this.rollAbility();
    hp = this.roll(8) + this.toughness;

    constructor() {
        super()
        this.stuff = this.stuff.concat([
            new Table(weapons).lookup(11),
            new Table(armor).lookup(2),
        ]);

        // TODO reroll two random abilities with +2
    }
}
