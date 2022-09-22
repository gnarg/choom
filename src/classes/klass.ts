import { TableValue } from '../tables/table';

export default interface Klass {
    name: string;
    description?: string;
    agility: number;
    knowledge: number;
    presence: number;
    strength: number;
    toughness: number;
    hp: number;
    glitches: number;
    special?: string;
    flavorDescription?: string;
    flavor?: TableValue;
    bonusDescription?: string;
    bonus?: TableValue;
    credits: number;
    debt: number;
    gear: TableValue[];
    apps?: TableValue[];
    feature: TableValue;
    style: TableValue;
    quirk: TableValue;
    wants: TableValue;
    obsession: TableValue;
}

export function roll(max:number, min=1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function rollAbility(bonus=0) {
    const p = Math.random() * 100;
  
    switch(bonus) {
      case(-2):
        if (p < 9.25) return -3;
        if (p < 25.92) return -2;
        if (p < 50.0) return -1;
        if (p < 90.74) return 0;
        if (p < 98.14) return 1;
        return 2;
      case(-1):
        if (p < 4.62) return -3;
        if (p < 16.2) return -2;
        if (p < 37.5) return -1;
        if (p < 83.79) return 0;
        if (p < 95.37) return 1;
        if (p < 99.53) return 2;
        return 3;
      case(0):
        if (p < 1.85) return -3;
        if (p < 9.25) return -2;
        if (p < 25.92) return -1;
        if (p < 74.07) return 0;
        if (p < 90.74) return 1;
        if (p < 98.14) return 2;
        return 3;
      case(1):
        if (p < 0.46) return -3;
        if (p < 4.62) return -2;
        if (p < 16.2) return -1;
        if (p < 62.5) return 0;
        if (p < 83.79) return 1;
        if (p < 95.37) return 2;
        return 3;
      case(2):
        if (p < 1.85) return -2;
        if (p < 9.25) return -1;
        if (p < 50.0) return 0;
        if (p < 74.07) return 1;
        if (p < 90.74) return 2;
    }
    return 3;
  }
