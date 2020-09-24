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
      {/* <Title>Heihei dette er via app.tsx</Title> */}
      <Title>Galleriet</Title>
      <Sidebar />
  {/*<p style={{marginLeft: '400px'}}>Dette er imgUrl: {imgProvider.imgUrl}</p>
  <p style={{marginLeft: '400px'}}>Dette er soundUrl: {soundProvider.soundUrl}</p>
  <p style={{marginLeft: '400px'}}>Dette er poemUrl: {poemProvider.poemUrl}</p>*/}
      <GridContainer />
    </div>
  );
}

export default App;
