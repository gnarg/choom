import apps from './apps.json';
import cybertech from './cybertech.json';
import nano_powers from './nano_powers.json';

export type TableValue = {
    value: string;
    details?: string;
    ref?: string;
    kind?: string;
}

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
            nano_powers
        }
        const table_value = this.values[Math.floor(Math.random() * max)];
        table_value.kind ||= this.kind;

        table_value.value = this.rollInline(table_value.value);
        if (table_value.details) {
            table_value.details = this.rollInline(table_value.details);
        }

        if (table_value.ref) {
            const [table_name, max] = table_value.ref.split(":");
            const value = new Table(tables[table_name]).lookup(parseInt(max));
            value.kind = table_name;
            return value;
        }
        return table_value;
    }

    roll(max:number, min=1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    rollInline(description: string): string {
        return description.replace(/\[(\d)-(\d)\]/, (_, min, max) => String(this.roll(max, min)));
    }
}
