import Table from '../tables/table';
import Klass from './klass';

class TestKlass extends Klass {
    klass = "test class";
    agility = 0;
    knowledge = 0;
    presence = 0;
    strength = 0;
    toughness = 0;
    hp = 0;
}

test("Random cyberdeck comes with two apps", () => {
    const character = new TestKlass()
      .gear([ { value: 'Used cyberdeck' } ])
      .appsForCyberdeck();
    expect(character.equipment('apps').length).toBe(2);
});

test("Nano power comes with infestation", () => {
    const character = new TestKlass()
      .gear([ new Table([ { value: 'A random Nano power', ref: 'nano_powers:11' } ]).lookup() ])
      .infestationsForNanos();
    expect(character.equipment('nano_powers').length).toBe(1);
    expect(character.equipment('infestations').length).toBe(1);
});
