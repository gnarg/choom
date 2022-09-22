import Table from '../tables/table';
import Klass, { roll, rollAbility } from "./klass";
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';
import gear0 from '../tables/gear0.json';
import gear1 from '../tables/gear1.json';
import gear2 from '../tables/gear2.json';
import features from '../tables/features.json';
import wants from '../tables/wants.json';
import styles from '../tables/style.json';
import quirks from '../tables/quirks.json';
import obsessions from '../tables/obsessions.json';

export default class DischargedCorpKiller implements Klass {
    name = "Discharged Corp Killer";
    description = "A good soldier in bad company, always fighting someone else’s war in the name of greed. Capitalism crushed your enthusiasm quickly enough, and you were discharged without severance.";
    agility = rollAbility();
    knowledge = rollAbility(-1);
    presence = rollAbility(-1);
    strength = rollAbility();
    toughness = rollAbility(2);
    hp = roll(8) + this.toughness;
    glitches = roll(2);
    special = "Autofire is always -1DR";
    gear = [
        new Table(weapons).lookup(11),
        new Table(armor).lookup(4),
        new Table(gear0).lookup(),
        new Table(gear1).lookup(),
        new Table(gear2).lookup(),
    ];
    flavorDescription = "Your deployment";
    flavor = new Table(
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
    ).lookup();
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
    credits = (roll(6) + roll(6)) * 10;
    debt = (roll(6) + roll(6) + roll(6)) + 1000;
    feature = new Table(features).lookup();
    style = new Table(styles).lookup();
    quirk = new Table(quirks).lookup();
    wants = new Table(wants).lookup();
    obsession = new Table(obsessions).lookup();
}