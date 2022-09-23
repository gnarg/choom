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
      <p className="rules">Your specialty was <b>{props.specialty.value}</b>: <span>{props.specialty.details}</span></p>
      </Container>
    )
  }
  return <></>;
}

function StatLine(props: {name: string, value: string | number}) {
  return <Row><Col className="label rules">{props.name}</Col><Col xs={7}>{props.value}</Col></Row>
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
          <Col><img src="CompWith_CY_BORG_horiz_small.png" width="100%" /></Col>
          <Col style={{fontFamily: 'Rubik Glitch', fontSize: '4vw', fontWeight: 'bold'}}>{character.klass}</Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <StatLine name="NAME" value={character.name} />
              <StatLine name="AGILITY" value={character.agility} />
              <StatLine name="KNOWLEDGE" value={character.knowledge} />
              <StatLine name="PRESENCE" value={character.presence} />
              <StatLine name="STRENGTH" value={character.strength} />
              <StatLine name="TOUGHNESS" value={character.toughness} />
            </Container>
          </Col>
          <Col>
            <Container>
              <StatLine name="HP" value={character.hp < 4 ? 4 : character.hp} />
              <StatLine name="G̷l̶i̴t̷c̸h̶e̴s̸" value={character.glitches} />
              <StatLine name="Style" value={character.style+character.feature} />
              <StatLine name="Obsession" value={character.obsession} />
              <StatLine name="Credits" value={character.credits + "¤"} />
              <StatLine name="Debt" value={character.debt + "¤"} />
            </Container>
          </Col>
        </Row>
        <p style={{fontSize: 'smaller'}}>{character.description}</p>
        <p>{character.flavor}</p>
        <p className="rules">{character.special}</p>
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
