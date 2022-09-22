import Table from "../tables/table";
import Klass, { roll, rollAbility } from "./klass";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class OrphanedGearHead extends Klass {
    name = "Orphaned Gear Head";
    description = "People are unreliable. Socially. Physically. Emotionally. Weak bodies and weaker wills. They are worn down, unfixable. Instead, you have mastered emotionless steel and loyal code. You can fix, drive and pilot any machine. Machines, you can trust.";
    agility = rollAbility();
    knowledge = rollAbility(2);
    presence = rollAbility(-2);
    strength = rollAbility();
    toughness = rollAbility();
    hp = roll(8) + this.toughness;
    special = "You test Knowledge DR10 when you try to repair a piece of tech or to pilot a vehicle, drone or other machine.";
    flavorDescription = "You trusted them, and then they";
    flavor = new Table(
        [
            {
                "value": "Disappeared in G0 (Looking for an advanced lab rumored to have survived the Incident.)"
            },
            {
                "value": "Were proclaimed dead (But you know their soul lives on inside something else.)"
            },
            {
                "value": "Were dragged off (to a Corp black-site by an anonymous killteam.)"
            },
            {
                "value": "Left you (to join up with a roadrunner outfit. They scavenge scrap on the rivers up north.)"
            },
            {
                "value": "Bugged out (pursued by rival droners and bots. Waiting out the heat.)"
            },
            {
                "value": "Got laid up (comatose in a Central Cy hospital. Allegedly a workshop accident. They’re fine as long as there’s ¤ on their account)"
            }
        ]
    ).lookup();
    bonusDescription = "You pilot";
    bonus = new Table(
        [
            {
                "value": "A semi-autonomous quad-bot",
                "details": "with tools including a health scanner and torch. Loyal but with an attitude. Bites for d4 damage, Knowledge+d8 HP and -d2 Armor."
            },
            {
                "value": "A flying drone",
                "details": "Follows basic commands. Knowledge+d12 HP, −d6 Armor, and an assault rifle d8a."
            },
            {
                "value": "Three fly-sized surveillance drones",
                "details": "equipped with a camera, 3D scanner and heat sensor respectively. Incredibly fragile. An expected corporate espionage tool."
            },
            {
                "value": "A prototype crawler drone",
                "details": "with a laser turret (d12a). Knowledge+d10 HP, -d6 Armor. Can follow advanced commands. Needs a hard reboot after dealing max damage."
            },
            {
                "value": "An armored van",
                "details": "Five seats and lined with junk. Has a smuggler’s hatch underneath it all. Once a day, test Knowledge DR8 to find the spare part you need to fix any broken tech."
            },
            {
                "value": "A walking weapons platform",
                "details": "Nigh-indestructible, large enough to ride and janky as hell. Anti-materiel battery (2d10) destroys most walls, doors and vehicles with a shot. Has a 2-in-6 chance of breaking down after firing. Takes d4 hours to repair."
            }
        ]
    ).lookup();

    constructor() {
        super();
        this.gear = this.gear.concat([
            new Table(weapons).lookup(11),
            new Table(armor).lookup(2),
        ]);
    }
}