// import React, { useState, useEffect } from 'react';
import "@fontsource/chakra-petch";
import "@fontsource/rubik-glitch"
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
      <p>Your specialty was <b>{props.specialty.value}</b>: <span>{props.specialty.details}</span></p>
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
        <Row style={{paddingTop: "1em", paddingBottom: "1em"}}>
          <Col><img src="CompWith_CY_BORG_horiz_small.png" width="450" /></Col>
          <Col style={{fontFamily: 'Rubik Glitch', fontSize: 52, fontWeight: 'bold'}}>{character.klass}</Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Row><Col className="label">NAME</Col><Col xs={7}>{character.name}</Col></Row>
              <Row><Col className="label">AGILITY</Col><Col xs={7}>{character.agility}</Col></Row>
              <Row><Col className="label">KNOWLEDGE</Col><Col xs={7}>{character.knowledge}</Col></Row>
              <Row><Col className="label">PRESENCE</Col><Col xs={7}>{character.presence}</Col></Row>
              <Row><Col className="label">STRENGTH</Col><Col xs={7}>{character.strength}</Col></Row>
              <Row><Col className="label">TOUGHNESS</Col><Col xs={7}>{character.toughness}</Col></Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row><Col className="label">HP</Col><Col xs={7}>{character.hp < 4 ? 4 : character.hp}</Col></Row>
              <Row><Col className="label">G̷l̶i̴t̷c̸h̶e̴s̸</Col><Col xs={7}>{character.glitches}</Col></Row>
              <Row><Col className="label">Style</Col><Col xs={7}>{character.style}{character.feature}</Col></Row>
              <Row><Col className="label">Obsession</Col><Col xs={7}>{character.obsession}</Col></Row>
              <Row><Col className="label">Credits</Col><Col xs={7}>{character.credits}¤</Col></Row>
              <Row><Col className="label">Debt</Col><Col xs={7}>{character.debt}¤</Col></Row>
            </Container>
          </Col>
        </Row>
        <p style={{fontSize: 'smaller'}}>{character.description}</p>
        <p>{character.flavor}</p>
        <p style={{backgroundColor: 'magenta', color: 'white'}}>{character.special}</p>
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
