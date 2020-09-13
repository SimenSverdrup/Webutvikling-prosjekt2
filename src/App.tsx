import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import GridContainer from './components/GridContainer';
import './App.css';
import Poetry from './Poetry'

function App() {
  return (
    <div className="App">
      <Title>Heihei dette er via app.tsx</Title>
      <GridContainer />
    </div>
  );
}

export default App;
