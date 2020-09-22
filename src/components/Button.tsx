import React from 'react';

interface Props {
    text: string;
    id: string;
}

function Button(props:Props) {
    return (
        <button id={props.id}>{props.text}</button>
    )
}

// Vil gjøre denne om til sånn at den kan ta inn argumenter. Kommenterer derfor ut dette,
// og prøver å lage en sånn props-knapp
/*export default function GridFavourite() {
    return (
        <div id="grid_faviourite">
            <button>Lagre som favoritt</button>
        </div>
    )
}*/

export default Button;