import React from 'react';

interface TitleProps {
    children: React.ReactNode;
}

export default function Title(props: TitleProps){
    return (
        <h1 id="header" className="header">{props.children}</h1>
    )
}

