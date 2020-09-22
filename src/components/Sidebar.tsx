import React, { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Button from './Button';
import GridFavourite from './Button';
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
            <h3 id="titleList">Utstillingsvalg</h3>
            <h4 id="imgTitleList">Bilde</h4>
            <ul id="imgList">
                <ListElement text={'Rakett'} setter={imgProvider.setImgUrl} url={"../assets/SVG/Rocket.svg"}/>
                <ListElement text={'Tenkende'} setter={imgProvider.setImgUrl} url={"../assets/SVG/Thinking.svg"}/>
                <ListElement text={'Mandala'} setter={imgProvider.setImgUrl} url={"../assets/SVG/AnimatedMandala.svg"}/>
            </ul>
            <h4 id="poemTitleList">Poesi</h4>
            <ul id="poemList">
                <ListElement text={'Shakespeare'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Shakespeare/lines.json"}/>
                <ListElement text={'Shelley'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/title/Ozymandias/lines.json"} />
                <ListElement text={'Downson'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Ernest%20Dowson/lines.json"}/>
            </ul>
            <h4 id="audTitleList">Lyd</h4>
            <ul id="audList">
                <ListElement text={'Pachelbel'} setter={soundProvider.setSoundUrl} url={"Canon"}/>
                <ListElement text={'Applause'} setter={soundProvider.setSoundUrl} url={"Applause"}/>
                <ListElement text={'Boo'} setter={soundProvider.setSoundUrl} url={"Boo"}/>
            </ul>

            {/*<GridFavourite />*/}
            <Button id={"saveBut"} text={'Lagre favoritt'}/>
            <Button id={"loadBut"} text={'Hent favoritt'}/>


        </div>
    )
}