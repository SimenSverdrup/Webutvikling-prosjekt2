import React from 'react';

interface Props {
    text: string;
}

export default function ListElement(props:Props) {
    return (
        <li>{props.text}</li>
    )
}
