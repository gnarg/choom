import apps from './apps.json';
import cybertech from './cybertech.json';
import nano_powers from './nano_powers.json';

export type TableValue = {
    value: string;
    details?: string;
    ref?: string;
    kind?: string;
}

/*
TODO handle
    {
        "value": "Cyberdeck",
        "details": "with d3 slots and 2 random apps"
    }
*/

export default class Table {
    values: TableValue[];
    kind: string;

    constructor(values: TableValue[], kind="gear") {
        this.values = values;
        this.kind = kind;
    }

    lookup(max=this.values.length): TableValue {
        const tables: Record<string, TableValue[]> = {
            apps,
            cybertech,
            nano_powers,
        }
        const table_value = this.values[Math.floor(Math.random() * max)];
        table_value.kind = this.kind;
        if (table_value.ref) {
            const [table_name, max] = table_value.ref.split(":");
            const value = new Table(tables[table_name]).lookup(parseInt(max));
            value.kind = table_name;
            return value;
        }
        return table_value;
    }
}
