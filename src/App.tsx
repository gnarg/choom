import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface TableValue {
  value: string;
  details?: string;
  ref?: string;
}

class Table {
  values: TableValue[];

  constructor(values: TableValue[]) {
    this.values = values;
  }

  lookup(range?: string): TableValue {
    return this.values[0];
  }
}

function App() {
  const [classes, setClasses] = useState<TableValue[]>();

  useEffect(() => {
    fetch("data/classes.json")
      .then(response => {
        return response.json();
      })
      .then(
        json => {
          setClasses(json);
        },
        error => {

        }
      );
  }, []);

  if (classes) {
    let classesTable = new Table(classes);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ul>
            {classesTable.values.map(klass => (
              <li key={klass.value}>
                {klass.value}
              </li>
            ))}
          </ul>
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
