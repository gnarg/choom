import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/* ability probabilities
-2
9.25  -3
25.92 -2
50.0  -1
90.74  0
98.14 +1
100.0 +2

-1
4.62 -3
16.2 -2
37.5 -1
83.79 0
95.37 +1
99.53 +2
100.0 +3

0
1.85  -3
9.25  -2
25.92 -1
74.07  0
90.74 +1
98.14 +2
100.0 +3

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

  constructor(values: TableValue[]) {
    this.values = values;
  }

  lookup(min=0, max=this.values.length): TableValue {
    let index = Math.floor(Math.random() * (max - min + 1) + min);
    return this.values[index];
  }
}

type Klass = {
  name: string;
  description: string;
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
