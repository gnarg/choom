import Table from '../tables/table';
import weapons from '../tables/weapons.json';
import armor from '../tables/armor.json';
import apps from '../tables/apps.json';
import Klass from './klass';

export default class BurnedHacker extends Klass {
    klass = "Burned Hacker";
    description = "/.You were one of the sharpest deckers in Cy. No one could use tech or warp the world with an App like you could. @@@@@@@@@@@@.&_ /.You don’t know what went wrong. You messed up. Maybe you were tricked; maybe you got sloppy. /.You glimpsed a terrible truth, and now you’re burnt. ///////////// No collective, no fallback, nothing.";
    agility = this.rollAbility();
    knowledge = this.rollAbility(2);
    presence = this.rollAbility();
    strength = this.rollAbility(-1);
    toughness = this.rollAbility(-1);
    hp = this.roll(6) + this.toughness;
    flavor = "You've found a terrible truth: " + new Table(
        [
            {
                "value": "The public faces of the UCS board are fabricated. They don't exist. Who's running the UCS?"
            },
            {
                "value": "Stealth carrier drones are offloading large amounts of something in G0 on rainy nights."
            },
            {
                "value": "Rogue AI are flocking to Cy, more so than than anywhere else in the world."
            },
            { 
                "value": "Nanobacteria is seeping into the Net. What does that even mean? Who’s covering it up?"
            },
            {
                "value": "Two AIs have merged into a two-headed sentience. Its intelligence is beyond our comprehension."
            },
            {
                "value": "An unknown collective has opened backdoors in Cy’s major data nodes. No hackers have claimed credit."
            }
        ]
    ).lookup().value;
    bonusDescription = "You built an App.";
    bonus = new Table(
        [
            {
                "value": "Borgtrigga-0.5",
                "details": "Provoke a Cy-rage test for one nearby target"
            },
            {
                "value": "Law1",
                "details": "Parallaxes imagery around you, making you invisible to all tech (except true AI) for 10 minutes"
            },
            {
                "value": "Boomboom",
                "details": "d4 nearby simple devices (lamps, monitors, cameras, etc) explode. d6 damage to up to d4 targets"
            },
            {
                "value": "CopySwappy",
                "details": "For d10 rounds, all tech will mistake you for another person within 30m and vice versa"
            },
            {
                "value": "tError",
                "details": "Target's RCD renders subliminal, personalized nightmare imagery that distorts reality. Test Presence DR14 or unable to act for d4 rounds"
            },
            {
                "value": "DvG-sling",
                "details": "Deal damage to cybered target or drone/vehicle/mech based on their size. Dog-sized targets take d6 damage, human d10, car 2d8, and larger targets take 2d12"
            }
        ]
    , 'apps').lookup();
    debt = (this.roll(10) + this.roll(10) + this.roll(10) + this.roll(10) + this.roll(10) + this.roll(10)) + 1000;

    classGear() {
        this.stuff = this.stuff.concat([
            new Table(weapons).lookup(7),
            new Table(armor).lookup(2),
            {
                value: "Cyberdeck",
                details: this.knowledge + 4 + " slots",
                kind: "gear"
            },
            new Table(apps, 'apps').lookup(),
            this.bonus,
        ]).map(item => {
            if (item.kind === 'cybertech' || item.kind === 'nano_powers') {
                return new Table(apps, 'apps').lookup();
            }
            return item;
        });
        return this;
    }
}
