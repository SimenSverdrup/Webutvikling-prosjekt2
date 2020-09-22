import React, { useState } from 'react';
import GridSvg from './GridSvg';
import Music from './Music';
import Poetry from './Poetry';
import Gallery from './Gallery';
import GridFavourite from './Button';


export default function GridContainer() {

    // Sier at imgChoice er med i staten, og setImgChoice er det som endrer staten.
    // Staten blir satt til 1 som default verdi
    const [imgChoice, setImgChoice] = useState<number>(1);

    return (
        <div id="grid_container">
            <GridSvg />
            <Poetry />
            {/*<Gallery img={imgChoice} />*/}
            {/*<button onClick={() => setImgChoice(3)}>Vis bilde 3</button>*/}
            <Music />
        </div>
    )
}

/* context */

// Gjør dette inni context
// <button onClick={() => setImgChoice(3)}>Vis bilde 3</button>
