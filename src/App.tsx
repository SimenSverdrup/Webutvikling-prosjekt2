import React from 'react';
import Title from './components/Title';
import GridContainer from './components/GridContainer';
import './App.css';
import Poetry from './Poetry'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Title>Heihei dette er via app.tsx</Title> */}
      <Title>Utstillingsnavn</Title>
      <Sidebar />
      <GridContainer />
    </div>
  );
}

export default App;
