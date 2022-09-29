import Table from './table';

test("single value lookup", () => {
    const test_table = [ { value: "test table value", details: "test table details" } ];
    const value = new Table(test_table).lookup();

    expect(value.value).toBe("test table value");
    expect(value.details).toBe("test table details");
    expect(value.kind).toBe("gear");
});

test("roll inline die", () => {
    const test_table = [ { value: "[1-4] test winguses", details: "test [2-5] thingies" } ]
    const value = new Table(test_table).lookup();

    expect(value.value).toMatch(/^\d test winguses/);
    expect(value.details).toMatch(/test \d thingies/);
});

test("ref looks up from referred table", () => {
    const test_table = [ { value: "A random app", ref: "apps:1" } ];
    const value = new Table(test_table).lookup();

    expect(value.value).toBe("WEIAN-Hammer");
    expect(value.kind).toBe("apps");
});
