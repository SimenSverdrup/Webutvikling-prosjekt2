import React, { useContext } from 'react';
import Title from './components/Title/Title';
import GridContainer from './components/GridContainer/GridContainer';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { GalleryContext } from './context/GalleryContext';

function App() {

  // Henter ut state for image, lyd og dikt
  const { imgProvider, soundProvider, poemProvider}  = useContext(GalleryContext)!;

  return (
    <div className="App">
      <Title>Galleriet</Title>
      <Sidebar />
      <GridContainer />
    </div>
  );
}

export default App;
