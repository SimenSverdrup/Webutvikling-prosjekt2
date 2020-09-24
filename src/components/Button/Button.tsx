import React from 'react';
import './Button.css';

interface Props {
    text: string;
    id: string;
}

export default function Button(props:Props) {
    return (
        <button id={props.id}>{props.text}</button>
    )
}
