// import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Row from 'react-bootstrap';
// import Col from 'react-bootstrap';
import BurnedHacker from './classes/burned_hacker';
import Classless from './classes/classless';
import DischargedCorpKiller from './classes/discharged_corp_killer';
import ForsakenGangGoon from './classes/forsaken_gang_goon';
import OrphanedGearHead from './classes/orphaned_gear_head';
import RenegadeCyberslasher from './classes/renegade_cyberslasher';
import ShunnedNano from './classes/shunned_nano';

const classes = [
  BurnedHacker,
  Classless,
  DischargedCorpKiller,
  ForsakenGangGoon,
  OrphanedGearHead,
  RenegadeCyberslasher,
  ShunnedNano
];

function App() {
  const character = new classes[Math.floor(Math.random() * (classes.length + 1))];

  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Row><Col>Class</Col><Col>{character.name}</Col></Row>
        <Row><Col>Description: {character.description}</Col></Row>
        <Row><Col>Agility</Col><Col>{character.agility}</Col><Col>HP</Col><Col>{character.hp}</Col></Row>
        <Row><Col>Knowledge</Col><Col>{character.knowledge}</Col><Col>Glitches</Col><Col>{character.glitches}</Col></Row>
        <Row><Col>Presence</Col><Col>{character.presence}</Col><Col>Credits</Col><Col>{character.credits}</Col></Row>
        <Row><Col>Strength</Col><Col>{character.strength}</Col><Col>Glitches</Col><Col>{character.glitches}</Col></Row>
        <Row><Col>Toughness</Col><Col>{character.toughness}</Col><Col>Glitches</Col><Col>{character.glitches}</Col></Row>
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
}

export default App;
