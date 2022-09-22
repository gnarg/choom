// import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BurnedHacker from './classes/burned_hacker';
import Classless from './classes/classless';
import DischargedCorpKiller from './classes/discharged_corp_killer';
import ForsakenGangGoon from './classes/forsaken_gang_goon';
import OrphanedGearHead from './classes/orphaned_gear_head';
import RenegadeCyberslasher from './classes/renegade_cyberslasher';
import ShunnedNano from './classes/shunned_nano';
import { TableValue } from './tables/table';

function GearTable(props: {name: string, values: TableValue[]} ) {
  if (props.values.length > 0) {
    return (
      <Container>
        <Row><Col>{props.name}</Col></Row>
        {
          props.values.map((item) => (
            <Row><Col>{item.value}</Col><Col xs={9}>{item.details}</Col></Row>
          ))
        }
      </Container>
    );
  }
  return <></>;
}

function SingleCol(props: {value?: string}) {
  if (props.value) {
    return (
      <Row><Col>{props.value}</Col></Row>
    );
  }
  return <></>;
}

function App() {
  const classes = [
    BurnedHacker,
    Classless,
    DischargedCorpKiller,
    ForsakenGangGoon,
    OrphanedGearHead,
    RenegadeCyberslasher,
    ShunnedNano
  ].sort(() => Math.random() - 0.5);
  const character = new classes[0]();

  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Row><Col>Name</Col><Col>{character.name}</Col><Col>Class</Col><Col>{character.klass}</Col></Row>
        <Row><Col>Agility</Col><Col>{character.agility}</Col><Col>HP</Col><Col>{character.hp}</Col></Row>
        <Row><Col>Knowledge</Col><Col>{character.knowledge}</Col><Col>Glitches</Col><Col>{character.glitches}</Col></Row>
        <Row><Col>Presence</Col><Col>{character.presence}</Col><Col>Credits</Col><Col>{character.credits}</Col></Row>
        <Row><Col>Strength</Col><Col>{character.strength}</Col><Col>Debt</Col><Col>{character.debt}</Col></Row>
        <Row><Col>Toughness</Col><Col>{character.toughness}</Col><Col>Style</Col><Col>{character.style}{character.feature}</Col></Row>
        <SingleCol value={character.description}/>
        <SingleCol value={character.flavor} />
      </Container>
      <GearTable name='Your Specialty was' values={character.equipment('specialty')} />
      <GearTable name='Gear' values={character.equipment('gear')} />
      <GearTable name='CyberTech' values={character.equipment('cybertech')} />
      <GearTable name='Nano-Powers' values={character.equipment('nano')} />
      <GearTable name='Infestations' values={character.equipment('infestation')} />
      <GearTable name='Apps' values={character.equipment('app')} />
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
}

export default App;
