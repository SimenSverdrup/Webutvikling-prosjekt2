import React from 'react';
import './Title.css';

interface TitleProps {
    children: React.ReactNode;
}

export default function Title(props: TitleProps){
    return (
        <h1 id="header" className="header">{props.children}</h1>
    )
}

