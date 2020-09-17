import React, { useState } from 'react';
import GridSvg from './GridSvg';
import GridPoem from './GridPoem';
import GridSound from './GridSound';
import Gallery from './Gallery';
import GridFaviourite from './GridFaviourite';

export default function GridContainer() {

    //sier at imgChoice er med i staten, og setImgChoice er det som endrer staten. 
    //staten blir satt til 1 som default verdi
    const [imgChoice, setImgChoice] = useState<number>(1);

    /*liste med filnavn = [..,..,..]*/
    let filnavnsvariabel = 0;

    return (

    <div id="grid_container">

        <GridSvg />
        <GridPoem />
        <Gallery img={imgChoice} />
        <button onClick={() => setImgChoice(3)}>Vis bilde 3</button>
        <GridFaviourite />
    
    </div>)
}

/* context */

// <GridSound /*audio={liste[fil]}*/ />

// Gjør dette inni context
// <button onClick={() => setImgChoice(3)}>Vis bilde 3</button>
