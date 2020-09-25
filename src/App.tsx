import React from 'react';
import Title from './components/Title/Title';
import GridContainer from './components/GridContainer/GridContainer';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Title>Galleriet</Title>
      <Sidebar />
      <GridContainer />
    </div>
  );
}

export default App;
