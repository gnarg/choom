// import React, { useState, useEffect } from 'react';
import "@fontsource/chakra-petch";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
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
      <b style={{ fontSize: "xxx-large"}}>{props.name}</b>
      <Table striped bordered variant="dark" size="sm">
        <tbody>
        {
          props.values.map(item => (
            <tr key={item.value}><td>{item.value}</td><td>{item.details}</td></tr>
          ))
        }
        </tbody>
      </Table>
      </Container>
    );
  }
  return <></>;
}

function Specialty(props: {specialty?: TableValue}) {
  if (props.specialty) {
    return (
      <Container>
        <Row><Col>Your specialty was {props.specialty.value}</Col><Col xs={9}>{props.specialty.details}</Col></Row>
      </Container>
    )
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
  ];
  const character = new classes[Math.floor(Math.random() * classes.length)]();

  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Row><Col className="label">NAME</Col><Col>{character.name}</Col><Col className="label">Class</Col><Col>{character.klass}</Col></Row>
        <Row><Col className="label">AGILITY</Col><Col>{character.agility}</Col><Col className="label">HP</Col><Col>{character.hp < 4 ? 4 : character.hp}</Col></Row>
        <Row><Col className="label">KNOWLEDGE</Col><Col>{character.knowledge}</Col><Col className="label">Glitches</Col><Col>{character.glitches}</Col></Row>
        <Row><Col className="label">PRESENCE</Col><Col>{character.presence}</Col><Col className="label">Credits</Col><Col>{character.credits}</Col></Row>
        <Row><Col className="label">STRENGTH</Col><Col>{character.strength}</Col><Col className="label">Debt</Col><Col>{character.debt}</Col></Row>
        <Row><Col className="label">TOUGHNESS</Col><Col>{character.toughness}</Col><Col className="label">Style</Col><Col>{character.style}{character.feature}</Col></Row>
        <p style={{fontSize: 'smaller'}}>{character.description}</p>
        <p>{character.flavor}</p>
      </Container>
      <Specialty specialty={character.equipment('specialty')[0]} />
      <GearTable name='./GEAR' values={character.equipment('gear')} />
      <GearTable name='./CYBERTECH' values={character.equipment('cybertech')} />
      <GearTable name='./NANOS' values={character.equipment('nano')} />
      <GearTable name='./INFESTATIONS' values={character.equipment('infestation')} />
      <GearTable name='./APPS' values={character.equipment('app')} />
      </header>

    </div>
  );
}

export default App;
