import React from 'react';

interface GalleryProps {
    img: number;
} 

export default function Gallery(props: GalleryProps) {
    let image = 'test';
    if (props.img === 1){
        image = 'Bilde 1';

    } else if (props.img === 2){
        image = 'Bilde 2';
    } else if (props.img === 3) {
        image = 'Bilde 3';
    }

    return (
    <h1>{image}</h1>
    )
}