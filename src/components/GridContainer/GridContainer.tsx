import React, { useState } from 'react';
import GridSvg from '../GridSvg/GridSvg';
import Music from '../Music/Music';
import Poetry from '../Poetry/Poetry';
import './GridContainer.css';


export default function GridContainer() {
    // Sier at imgChoice er med i staten, og setImgChoice er det som endrer staten.
    // Staten blir satt til 1 som default verdi
    const [imgChoice, setImgChoice] = useState<number>(1);

    return (
        <div id="grid_container">
            <GridSvg />
            <Poetry />
            <Music />
        </div>
    )
}
