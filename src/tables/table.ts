export type TableValue = {
    value: string;
    details?: string;
    ref?: string;
}

export default class Table {
    values: TableValue[];
    description?: string;

    constructor(values: TableValue[], description=undefined) {
        this.values = values;
        this.description = description;
    }

    lookup(max=this.values.length) {
        return this.values[Math.floor(Math.random() * (max + 1))];
    }
}
