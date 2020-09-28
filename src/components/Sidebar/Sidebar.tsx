import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import Button from '../Button/Button';
import GridFavourite from '../Button/Button';
import ListElement from '../ListElement/ListElement';
import './Sidebar.css';


export default function Sidebar() {
    
    const { imgProvider, soundProvider, poemProvider }  = useContext(GalleryContext)!;
    
    return (
        <div className="sidebar"  id="sidebar">
            <h3 className="titleList" id="titleList">Utstillingsvalg</h3>
            <h4 className="imgTitleList" id="imgTitleList">Bilde</h4>
            <ul className="list" id="imgList">
                <ListElement text={'Rakett'} setter={imgProvider.setImgUrl} url={"../assets/SVG/Rocket.svg"}/>
                <ListElement text={'Tenkende'} setter={imgProvider.setImgUrl} url={"../assets/SVG/Thinking.svg"}/>
                <ListElement text={'Mandala'} setter={imgProvider.setImgUrl} url={"../assets/SVG/AnimatedMandala.svg"}/>
            </ul>
            <h4 id="poemTitleList">Poesi</h4>
            <ul className="list" id="poemList">
                <ListElement text={'Shakespeare'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Shakespeare/lines.json"}/>
                <ListElement text={'Shelley'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/title/Ozymandias/lines.json"} />
                <ListElement text={'Downson'} setter={poemProvider.setPoemUrl} url={"https://poetrydb.org/author/Ernest%20Dowson/lines.json"}/>
            </ul>
            <h4 id="audTitleList">Lyd</h4>
            <ul className="list" id="audList">
                <ListElement text={'Pachelbel'} setter={soundProvider.setSoundUrl} url={"Canon"}/>
                <ListElement text={'Applause'} setter={soundProvider.setSoundUrl} url={"Applause"}/>
                <ListElement text={'Boo'} setter={soundProvider.setSoundUrl} url={"Boo"}/>
            </ul>
            <Button id={'saveBut'} text={'Lagre favoritt'}/>
            <Button id={'loadBut'} text={'Hent favoritt'}/>
        </div>
    )
}