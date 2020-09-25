import React from 'react';
import './ListElement.css';

// her definerer vi bare tingene våre
interface Props {
    // vi ser at text er en string
    text: string;
    // setter er en fuksjon som tar inn en string og som ikke returnerer noe
    setter: (val: string) => void;
    // url er en string
    url: string;
}

export default function ListElement(props:Props) {
    
    return (
        // {props.text} inni setter bare den teksten vi sender inn i listeelementet
        // ved klikk på elementet kjører vi setter-funksjonen med url-en vi sender inn
        <li onClick={() => props.setter(props.url)}>{props.text}</li>)
}
