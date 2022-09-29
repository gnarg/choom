import BurnedHacker from "./burned_hacker";

test("No nanos or infestations for hacker", () => {
    const character = new BurnedHacker()
      .gear([ { value: "Some kind of spooky nonsense", kind: "nano_powers" } ])
      .classGear();

    expect(character.equipment('nano_powers').length).toBe(0);
    expect(character.equipment('infestations').length).toBe(0);
});

test("No cybertech for hacker", () => {
    const character = new BurnedHacker()
      .gear([ { value: "Snazzy chrome", kind: 'cybertech' } ])
      .classGear();

    expect(character.equipment('cybertech').length).toBe(0);
});
