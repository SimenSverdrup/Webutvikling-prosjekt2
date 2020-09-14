import React, { useContext } from 'react';
import { GalleryContext } from'../context/GalleryContext';

interface Props {
    text: string;
    setter: (val: string) => void; 
    //legg til url
}

export default function ListElement(props:Props) {
    
    return (
                <li onClick={() => props.setter(props.text)}>{props.text}</li>) //bytt setter fra props.txt til props.url

}
