import React, { useContext } from 'react';
import Title from './components/Title';
import GridContainer from './components/GridContainer';
import './App.css';
import Poetry from './Poetry'
import Sidebar from './components/Sidebar';
import { GalleryContext } from './context/GalleryContext';

function App() {

  //henter ut state for image, lyd og dikt
  const { imgProvider, soundProvider, poemProvider}  = useContext(GalleryContext)!;

  return (
    <div className="App">
      {/* <Title>Heihei dette er via app.tsx</Title> */}
      <Title>Utstillingsnavn</Title>
      <Sidebar />
  <p style={{marginLeft: '400px'}}>Dette er imgUrl: {imgProvider.imgUrl}</p>
  <p style={{marginLeft: '400px'}}>Dette er soundUrl: {soundProvider.soundUrl}</p>
  <p style={{marginLeft: '400px'}}>Dette er poemUrl: {poemProvider.poemUrl}</p>
      <GridContainer />
    </div>
  );
}

export default App;
