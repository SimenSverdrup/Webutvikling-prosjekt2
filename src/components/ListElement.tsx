import React, { useContext } from 'react';
import { GalleryContext } from'../context/GalleryContext';

interface Props {
    text: string;
    setter: (val: string) => void; 
    url: string;
}

export default function ListElement(props:Props) {
    
    return (
                <li onClick={() => props.setter(props.url)}>{props.text}</li>) //bytt setter fra props.txt til props.url

}
