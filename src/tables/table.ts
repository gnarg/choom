import apps from './apps.json';
import cybertech from './cybertech.json';
import nano_powers from './nano_powers.json';

export type TableValue = {
    value: string;
    details?: string;
    ref?: string;
}

export default class Table {
    values: TableValue[];

    constructor(values: TableValue[]) {
        this.values = values;
    }

    lookup(max=this.values.length): TableValue {
        const tables: Record<string, TableValue[]> = {
            apps,
            cybertech,
            nano_powers,
        }
        const table_value = this.values[Math.floor(Math.random() * (max + 1))];
        if (table_value.ref) {
            const [table_name, max] = table_value.ref.split(":");
            return new Table(tables[table_name]).lookup(parseInt(max));
        }
        return table_value;
    }
}
