import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TableValue } from './tables/table';

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

// type TableValue = {
//   value: string;
//   details?: string;
//   ref?: string;
// }

// class Table {
//   values: TableValue[];
//   description?: string;

//   constructor(values: TableValue[]) {
//     this.values = values;
//   }

//   lookup(min=0, max=this.values.length) {
//     let index = Math.floor(Math.random() * (max - min + 1) + min);
//     return this.values[index];
//   }
// }

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



// function randomValue(min: number, max: number) {

// }

function rollAbility(bonus: string): number {
  const p = Math.random() * 100;

  switch(bonus) {
    case("-2"):
      if (p < 9.25) return -3;
      if (p < 25.92) return -2;
      if (p < 50.0) return -1;
      if (p < 90.74) return 0;
      if (p < 98.14) return 1;
      return 2;
    case("-1"):
      if (p < 4.62) return -3;
      if (p < 16.2) return -2;
      if (p < 37.5) return -1;
      if (p < 83.79) return 0;
      if (p < 95.37) return 1;
      if (p < 99.53) return 2;
      return 3;
    case("0"):
      if (p < 1.85) return -3;
      if (p < 9.25) return -2;
      if (p < 25.92) return -1;
      if (p < 74.07) return 0;
      if (p < 90.74) return 1;
      if (p < 98.14) return 2;
      return 3;
    case("+1"):
      if (p < 0.46) return -3;
      if (p < 4.62) return -2;
      if (p < 16.2) return -1;
      if (p < 62.5) return 0;
      if (p < 83.79) return 1;
      if (p < 95.37) return 2;
      return 3;
    case("+2"):
      if (p < 1.85) return -2;
      if (p < 9.25) return -1;
      if (p < 50.0) return 0;
      if (p < 74.07) return 1;
      if (p < 90.74) return 2;
  }
  return 3;
}

async function getKlass(): Promise<Klass> {
  const klassName = await fetch("data/classes.json")
    .then(response => response.json())
    .then(
      json => lookup(json).value,
      error => {
        // TODO error handling
      });

  return fetch("data/classes/" + klassName + ".json")
    .then(response => response.json());
}

function App() {
  const [klass, setKlass] = useState<Klass>();

  useEffect(() => {
    const fetchKlass = async () => {
      setKlass(await getKlass());
    }
    fetchKlass();
  }, [])

  if (klass) {
    const toughness = rollAbility(klass.abilities.toughness);
    return (
      <div className="App">
        <header className="App-header">
        <Container>
          <Row><Col>Class</Col><Col>{klass.name}</Col></Row>
          <Row><Col>Description: {klass.description}</Col></Row>
          <Row><Col>Agility</Col><Col>{rollAbility(klass.abilities.agility)}</Col><Col>HP</Col><Col>{roll(klass.hp) + toughness}</Col></Row>
          <Row><Col>Knowledge</Col><Col>{rollAbility(klass.abilities.knowledge)}</Col><Col>Glitches</Col><Col>{roll(klass.glitches)}</Col></Row>
          <Row><Col>Presence</Col><Col>{rollAbility(klass.abilities.presence)}</Col><Col>Credits</Col><Col>{(roll("1-6") + roll("1-6")) * 10}</Col></Row>
          <Row><Col>Strength</Col><Col>{rollAbility(klass.abilities.strength)}</Col><Col>Glitches</Col><Col>{roll(klass.glitches)}</Col></Row>
          <Row><Col>Toughness</Col><Col>{toughness}</Col><Col>Glitches</Col><Col>{roll(klass.glitches)}</Col></Row>
        </Container>
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
