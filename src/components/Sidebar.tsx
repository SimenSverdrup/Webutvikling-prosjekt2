import React, { useContext } from 'react';
import { GalleryContext} from '../context/GalleryContext';
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
                <ListElement text={'Sommerfugl'} setter={imgProvider.setImgUrl} />
                <ListElement text={'Hytte'} setter={imgProvider.setImgUrl} />
                <ListElement text={'Epletre'} setter={imgProvider.setImgUrl} />
            </ul>
            <h4>Poesi</h4>
            <ul>
                <ListElement text={'Lorem ipsum'} setter={poemProvider.setPoemUrl}/>
                <ListElement text={'Lorem ipsum'} setter={poemProvider.setPoemUrl}/>
            </ul>
            <h4>Lys</h4>
            <ul>
                <ListElement text={'Alt. 1'} setter={soundProvider.setSoundUrl}/>
                <ListElement text={'Alt. 2'} setter={soundProvider.setSoundUrl}/>
            </ul>

        </div>
    )
}