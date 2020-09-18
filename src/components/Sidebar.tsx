import React, { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';
import GridFavourite from './GridFavourite';
import ListElement from './ListElement';

export default function Sidebar() {
    // han sa jeg skulle ha fuksjon inni funksjon (altså at det som er kommentert her
    // er inni en ny funksjon som endrer ting, altså js.delen)

    //state 

    //funksjoner som endrer state


    //ting som vises

    const { imgProvider, soundProvider, poemProvider }  = useContext(GalleryContext)!;
    
    //Legg til URL på hver ListeElement
    return (
        <div id="sidebar">
            <h3>Utstillingsvalg</h3>
            <h4>Bilde</h4>
            <ul>
                <ListElement text={'Rakett'} setter={imgProvider.setImgUrl} url={""}/>
                <ListElement text={'Tenkende'} setter={imgProvider.setImgUrl} url={""}/>
                <ListElement text={'Mandala'} setter={imgProvider.setImgUrl} url={""}/>
            </ul>
            <h4>Poesi</h4>
            <ul>
                <ListElement text={'Shakespare '} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Shakespeare/lines.json"}/>
                <ListElement text={'Shelly'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/title/Ozymandias/lines.json"} />
                <ListElement text={'Downson'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Ernest%20Dowson/lines.json"}/>
            </ul>
            <h4>Lyd</h4>
            <ul>
                <ListElement text={'Alt. 1'} setter={soundProvider.setSoundUrl} url={""}/>
                <ListElement text={'Alt. 2'} setter={soundProvider.setSoundUrl} url={""}/>
            </ul>

            <GridFavourite />

        </div>
    )
}