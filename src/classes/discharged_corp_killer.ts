import Table from '../tables/table';
import Klass from "./klass";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';

export default class DischargedCorpKiller extends Klass {
    klass = "Discharged Corp Killer";
    description = "A good soldier in bad company, always fighting someone else’s war in the name of greed. Capitalism crushed your enthusiasm quickly enough, and you were discharged without severance.";
    agility = this.rollAbility();
    knowledge = this.rollAbility(-1);
    presence = this.rollAbility(-1);
    strength = this.rollAbility();
    toughness = this.rollAbility(2);
    hp = this.roll(8) + this.toughness;
    special = "Autofire is always -1DR";
    flavor = "Your deployment: " + new Table(
        [
            {
                "value": "Urban infiltration in Cy Central. You know the area well."
            },
            {
                "value": "Orbital station grunt. Zero-G wall breaches and airlock executions were your idea of fun."
            },
            {
                "value": "Maritime raider. Blowing up drilling rigs, underwater labs and the occasional ship."
            },
            {
                "value": "Mobile wasteland rig corps. Mowing down roadrunners, sabotaging rival infrastructure, burning what little nature was left."
            },
            {
                "value": "Periglacial SecCorp. Plundering released gas and bioweapons for your employer."
            },
            {
                "value": "Didn’t get that far. Washed out."
            }
        ]
    ).lookup().value;
    bonusDescription = "You took something from you employer"
    bonus = new Table(
        [
            {
                "value": "Old school heavy machine gun",
                "details": "d12a damage, but breaks down after a damage roll of 1. You can fix it if you get 10 minutes of quiet time."
            },
            {
                "value": "Prototype Smart™ assault rifle",
                "details": "d10a damage. Around- the-corner shooting, camera sight, grenade launcher, the works."
            },
            {
                "value": "Toughness+5 hand grenades and 5 flashbangs.",
                "details": "You throw grenades with -2DR."
            },
            {
                "value": "Heavy laser cannon",
                "details": "d12 damage, Presence DR14 against people, bots and animals. 3d12 damage, Presence DR10 against vehicles, turrets or similar targets."
            },
            {
                "value": "Crowd-control air cannon",
                "details": "d6 damage, can hit up to d3 targets close to each other."
            },
            {
                "value": "Incendiary shotgun",
                "details": "d10 damage and test Agility DR12 or flammable materials are ignited for +d6 damage the following round."
            }
        ]
    ).lookup();

    constructor() {
        super();
        this.stuff = this.stuff.concat(
            [
                new Table(weapons).lookup(11),
                new Table(armor).lookup(4),
                this.bonus,
            ]
        )

    }
}