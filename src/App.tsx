import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/* ability probabilities
+1
0.46  -3
4.62  -2
16.2  -1
62.5   0
83.79 +1
95.37 +2
100.0 +3

+2
1.85  -2
9.25  -1
50.0   0
74.07 +1
90.74 +2
100.0 +3
 */

// Stuff
// 2d6 * 10 creds
// cheap clothes
// Retinal Com Device
// gear0
// gear1
// gear2
// feature
// style
// quirk
// wants

type TableValue = {
  value: string;
  details?: string;
  ref?: string;
}

class Table {
  values: TableValue[];
  description?: string;

  constructor(values: TableValue[]) {
    this.values = values;
  }

  lookup(min=0, max=this.values.length) {
    let index = Math.floor(Math.random() * (max - min + 1) + min);
    return this.values[index];
  }
}

// class Rnd {
//   value: number

//   constructor(range: string) {
//     let regex = /^(\d+)\-(\d+)$/
//     let groups = regex.exec(range);
//     let min = groups?[0][0] : 0;
//     let max = groups?[1][0] : 0;

//     this.value = Math.floor(Math.random() * (max - min + 1) + min);
//   }
// }

function roll(range: string) {
  let regex = /^(\d+)-(\d+)$/;
  let groups = regex.exec(range);
  let min = groups?[1][0] : 0;
  let max = groups?[2][0] : 0;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function randomValue(min: number, max: number) {

// }

type Abilities = {
  agility: string;
  knowledge: string;
  presence: string;
  strength: string;
  toughness: string;
}

function rollAbility(bonus: string) {
  let p = Math.random() * 100;

  switch(bonus) {
    case("-2"):
      if (p < 9.25) return "-3";
      if (p < 25.92) return "-2";
      if (p < 50.0) return "-1";
      if (p < 90.74) return "0";
      if (p < 98.14) return "+1";
      return "+2";
    case("-1"):
      if (p < 4.62) return "-3";
      if (p < 16.2) return "-2";
      if (p < 37.5) return "-1";
      if (p < 83.79) return "0";
      if (p < 95.37) return "+1";
      if (p < 99.53) return "+2";
      return "+3";
    case("0"):
      if (p < 1.85) return "-3";
      if (p < 9.25) return "-2";
      if (p < 25.92) return "-1";
      if (p < 74.07) return "0";
      if (p < 90.74) return "+1";
      if (p < 98.14) return "+2";
      return "+3";
    case("+1"):
      if (p < 0.46) return "-3";
      if (p < 4.62) return "-2";
      if (p < 16.2) return "-1";
      if (p < 62.5) return "0";
      if (p < 83.79) return "+1";
      if (p < 95.37) return "+2";
      return "+3";
    case("+2"):
      if (p < 1.85) return "-2";
      if (p < 9.25) return "-1";
      if (p < 50.0) return "0";
      if (p < 74.07) return "+1";
      if (p < 90.74) return "+2";
      return "+3";
  }

  // consult the table for the bonus
  // return the value
}

type Klass = {
  name: string;
  description?: string;
  glitches: string;
  abilities: Abilities;
  special: string;
  weapon: string;
  armor: string;
  debt: string;
  flavor: Table;
  bonus: Table;
}

async function getKlass(): Promise<Klass> {
  let klassName = await fetch("data/classes.json")
    .then(response => response.json())
    .then(
      json => new Table(json).lookup().value,
      error => {
        // TODO error handling
      });

  return fetch("data/classes/" + klassName + ".json")
    .then(response => response.json());
}

function App() {
  const [klass, setKlass] = useState<Klass>();

  useEffect(() => {
    let fetchKlass = async () => {
      setKlass(await getKlass());
    }
    fetchKlass();
  }, [])

  if (klass) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {klass.name}
          </p>
          <p>
            {klass.description}
          </p>
          <p>
            {roll(klass.glitches)}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } else {
    return <></>
  }
}

export default App;
