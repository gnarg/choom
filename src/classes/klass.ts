import Table, { TableValue } from '../tables/table';
import features from '../tables/features.json';
import wants from '../tables/wants.json';
import styles from '../tables/style.json';
import quirks from '../tables/quirks.json';
import obsessions from '../tables/obsessions.json';
import gear0 from '../tables/gear0.json';
import gear1 from '../tables/gear1.json';
import gear2 from '../tables/gear2.json';
import names from '../tables/names.json';

export default abstract class BaseKlass {
    abstract klass: string;
    name = new Table(names).lookup().value + ' ' + new Table(names).lookup().value;
    description?: string;
    abstract agility: number;
    abstract knowledge: number;
    abstract presence: number;
    abstract strength: number;
    abstract toughness: number;
    abstract hp: number;
    special?: string;
    flavorDescription?: string;
    flavor?: string;
    bonusDescription?: string;
    bonus?: TableValue;
    glitches = this.roll(2);
    stuff = [
      new Table(gear0).lookup(),
      new Table(gear1).lookup(),
      new Table(gear2).lookup(),
    ];
    feature = new Table(features).lookup().value;
    style = new Table(styles).lookup().value;
    quirk = new Table(quirks).lookup().value;
    wants = new Table(wants).lookup().value;
    obsession = new Table(obsessions).lookup().value;
    credits = (this.roll(6) + this.roll(6)) * 10;
    debt = (this.roll(6) + this.roll(6) + this.roll(6)) * 1000;

    rollAbility(bonus=0) {
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

    roll(max:number, min=1) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    equipment(kind: string) {
        return this.stuff.filter(item => item.kind === kind);
    }
}
