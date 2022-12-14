import Klass from "./klass";
import Table from "../tables/table";
import nanos from "../tables/nano_powers.json";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class ShunnedNano extends Klass {
    klass = "Shunned Nano";
    description = "It’s inside you. Infesting your brain, warping your flesh. People are afraid of you now. They’re afraid of the power that poisons you. You’re scared too.";
    agility = this.rollAbility();
    knowledge = this.rollAbility();
    presence = this.rollAbility(2);
    strength = this.rollAbility();
    toughness = this.rollAbility(-2);
    hp = this.roll(4) + this.toughness;
    flavor = "You got infected when " + new Table(
        [
            {
                "value": "you spent a wild night with a group of neo-pagan cultists, perfomring profane rites to some snake god."
            },
            {
                "value": "a star fell close to you building and you were a curious child."
            },
            {
                "value": "you found drugs. Free drugs. They were neither drugs nor entirely free."
            },
            {
                "value": "you were kidnapped and subjected to horrible experiments."
            },
            {
                "value": "a G0 rat bit you."
            },
            {
                "value": "you were born."
            }
        ]
    ).lookup().value;
    bonusDescription = "You also have one of these";
    bonus = new Table(
        [
            {
                "value": "A strange leaf-looking knife",
                "details": "Deals d4 damage, victims have to test Toughness or bleed 1 HP for d6 rounds."
            },
            {
                "value": "Milkwhite eyes that see through lies",
                "details": "Once per day, when you believe you've been lied to, test Presence DR8. On a success, you can tell whenever the target lies for the rest of the day"
            },
            {
                "value": "Burnt orange, stone-like skin",
                "details": "-d4 damage taken, not subject to being reduced on a defence fumble. Instead, you take an additional d8 damage, as part of you skin is ripped off"
            },
            {
                "value": "A second mouth where your navel should be",
                "details": "Any food or drugs consumed with your navel-mouth are twice as effective"
            },
            {
                "value": "An elongated, pointed and semi-translucent skull",
                "details": "Your brain shines underneath, emitting light like that of a candle"
            },
            {
                "value": "Scales cover most of your body",
                "details": "any roll to resist cold, heat or radiation is -4DR"
            }
        ]
    ).lookup();


    classGear() {
        this.stuff = this.stuff.concat([
            new Table(weapons).lookup(5),
            new Table(armor).lookup(1),
            new Table(nanos, 'nano_powers').lookup(),
            this.bonus
        ]).map(item => {
            if (item.kind === 'cybertech' || item.kind === 'app') {
                return new Table(nanos, 'nano_powers').lookup();
            }
            return item;
        });
        return this;
    }
}
