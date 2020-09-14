import React from 'react';

interface Props {
    audio: string;
}

export default function GridSound(props:Props) {
    return (
        <div id="grid_sound">
            <audio controls src={props.audio}>
            Your browser does not support the <code>audio</code> element. </audio>
        </div>
    )
}