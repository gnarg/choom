import Table from "../tables/table";
import Klass from "./klass";
import cybertech from "../tables/cybertech.json";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class RenegadeCyberslasher extends Klass {
    klass = "Renegade Cyberslasher";
    description = "You are DEATH incarnate — a frenzied flurry of chrome, murder and blood-stained steel. But yours is no mindless rage. You match your trained and cybernetically enhanced body with an equally disciplined mind. You used to kill for a cause, for an ideal. Now? You kill for money.";
    agility = this.rollAbility();
    knowledge = this.rollAbility(-2);
    presence = this.rollAbility(1);
    strength = this.rollAbility(1);
    toughness = this.rollAbility();
    hp = this.roll(10) + this.toughness;
    flavor = "You start each day with " + new Table(
        [
            {
                "value": "doing yoga and meditation."
            },
            {
                "value": "chugging a mix of carefully selected and measured stimulants."
            },
            {
                "value": "assiduously minding your three favorite plants."
            },
            {
                "value": "obsessively laying out your clothes and cleaning your gear."
            },
            {
                "value": "a recreational blood transfusion."
            },
            {
                "value": "strengthening your inner daemon through a chaos magick ritual."
            }
        ]
    ).lookup().value;
    bonusDescription = "Your trenchcoat hides most of your";
    bonus = new Table(
        [
            {
                "value": "Ancient blade",
                "details": "d8 that has claimed 1.000 souls. Or so you say. If you are the first to strike in combat, you deal double damage."
            },
            {
                "value": "Steelcutter chainsaw",
                "details": "d8 Absolutely not made for combat. When hitting for maximum damage, it gets stuck for d3 rounds, dealing damage automatically as long as it remains there."
            },
            {
                "value": "Filament zweihänder",
                "details": "d10 that makes everyone around you nervous. Crits hit with such a force that your target is thrown up in the air, making them an easy target (-2DR) for anyone else."
            },
            {
                "value": "Wire-wrapped baseball bat",
                "details": "d8 hooked up to a battery. You can supercharge it, dealing +d4 damage to your target and to yourself."
            },
            {
                "value": "Dual Logans",
                "details": "d8 that make that sound when you pop ʼem out. Once per fight, you can surprise a victim by popping out feet claws as well, attacking at DR8.",
                kind: "cybertech"
            },
            {
                "value": "GodDAMN flail",
                "details": "d8 Spiked. Absolutely medieval. Crumples and shreds enemy armor a tier when you hit for 6+ damage."
            }
        ]
    ).lookup();

    constructor() {
        super();
        this.stuff = this.stuff.concat([
            new Table(weapons, 'weapon').lookup(11),
            new Table(armor).lookup(2),
            new Table(cybertech, 'cybertech').lookup(11),
            this.bonus,
        ]).map(item => {
            if (item.kind === 'nano' || item.kind === 'app') {
                return new Table(cybertech, 'cybertech').lookup();
            }
            return item;
        });
    }
}
