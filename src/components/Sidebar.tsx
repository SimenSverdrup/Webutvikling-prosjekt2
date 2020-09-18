import React, { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';
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
                <ListElement text={'Sommerfugl'} setter={imgProvider.setImgUrl} url={""}/>
                <ListElement text={'Hytte'} setter={imgProvider.setImgUrl} url={""}/>
                <ListElement text={'Epletre'} setter={imgProvider.setImgUrl} url={""}/>
            </ul>
            <h4>Poesi</h4>
            <ul>
                <ListElement text={'Shakespeare'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Shakespeare/lines.json"}/>
                <ListElement text={'Shelley'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/title/Ozymandias/lines.json"} />
                <ListElement text={'Ernest Downson'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Ernest%20Dowson/lines.json"}/>
            </ul>
            <h4>Lyd</h4>
            <ul>
                <ListElement text={'Pachelbel'} setter={soundProvider.setSoundUrl} url={"Canon"}/>
                <ListElement text={'Applause'} setter={soundProvider.setSoundUrl} url={"Applause"}/>
                <ListElement text={'Boo'} setter={soundProvider.setSoundUrl} url={"Boo"}/>
            </ul>

        </div>
    )
}