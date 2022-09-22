import Table from "../tables/table";
import Klass from "./klass";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class ForsakenGangGoon extends Klass  {
    klass = "Forsaken Gang Goon";
    description = "You ran with the only gang to have your back and treat you like more than slum trash. They were your family, and you bled, stole, fought and killed for them. They’re gone now, so you have to keep your edge.";
    agility = this.rollAbility();
    knowledge = this.rollAbility();
    presence = this.rollAbility();
    strength = this.rollAbility(-2);
    toughness = this.rollAbility();
    hp = this.roll(6) + this.toughness;
    glitches = this.roll(3);
    special = "All Presence and Agility tests are -2DR.";
    flavorDescription = "Your gang";
    flavor = new Table(
        [
            {
                "value": "was taken out by a rival gang. They think you are dead too."
            },
            {
                "value": "got hauled off. Cops thought you were just a punk kid. Nobody ratted you out."
            },
            {
                "value": "betrayed you. Left you for dead in the gutter. They don’t know you survived."
            },
            {
                "value": "wandered off into G0 with a newfound religious fervor. They left you and a few other skeptics behind."
            },
            {
                "value": "broke the only rules that separate a criminal from a monster. You left on bad terms."
            },
            {
                "value": "threw you out for breaking the code. They’ll kill you if they see you again."
            }
        ]
    ).lookup().value;
    bonusDescription = "Your specialy was";
    bonus = new Table(
        [
            {
                "value": "HITS",
                "details": "When attacking from surprise, test Agility DR10. On a success, you hit once with a melee weapon, dealing normal damage +3."
            },
            {
                "value": "BRAWLS",
                "details": "Test Agility DR14 to sucker punch an opponent in melee. Deal normal damage and give all allies -2DR on their next attack against the same enemy."
            },
            {
                "value": "BnE",
                "details": "You have a talent for opening doors and getting inside buildings. Test Agility DR10 to pick any mechanical lock or Knowledge DR10 for any electronic lock. You begin with toolsets for both mechanical and electronic lockpicking."
            },
            {
                "value": "FENCING",
                "details": "You know potential buyers for almost anything. Once per day, you can test Presence DR12 to remember the name of a person in Cy who might be willing and able to buy whatever illicit goods have fallen into your hands."
            },
            {
                "value": "CLEANUP",
                "details": "You know how to clean up evidence from a crime scene. Start with two DNA bombs and a large bottle of acid."
            },
            {
                "value": "ASSAULTS",
                "details": "You always liked it old school: both hands raised, running straight at the enemy. Whatever weapon you begin with, you start with one for each hand. You can use it to make a second attack each round at DR14."
            }
        ]
    , 'specialty').lookup();

    constructor() {
        super();
        this.stuff = this.stuff.concat([
            new Table(weapons).lookup(5),
            new Table(armor).lookup(1),
            this.bonus,
        ]);
    }        
}