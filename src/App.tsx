import React from 'react';
import logo from './logo.svg';
import './App.css';
import Poetry from './Poetry'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div id="header">
        <p>Tittel</p>
      </div>

      <div id="grid_container">

        <div id="grid_svg">
        <svg width="300" height="200" background-color="white">
          <rect id="house" width="100" height="60" x="100" y="120" />
          <rect width="5" height="200" x="0" y="0" />
          <rect width="5" height="200" x="295" y="0" />
          <rect width="300" height="5" x="0" y="195" />
          <rect width="300" height="5" x="0" y="0" />
        </svg>
        </div>

        <div id="grid_poem">
          <p>Her kommer det poems</p>
        </div>

        <div id="grid_sound">
          <p>Her kommer det lydbar</p>
        </div>

        <div id="grid_faviourite">
          <button>Lagre som favoritt</button>
        </div>

      </div>

      

    </div>
  );
}

export default App;
