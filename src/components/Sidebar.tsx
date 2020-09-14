import React from 'react';
import ListElement from './ListElement';

export default function Sidebar() {
    // han sa jeg skulle ha fuksjon inni funksjon (altså at det som er kommentert her
    // er inni en ny funksjon som endrer ting, altså js.delen)

    //state 

    //funksjoner som endrer state


    //ting som vises
    
    return (
        <div id="sidebar">
            <h3>Utstillingsvalg</h3>
            <h4>Bilde</h4>
            <ul>
                <ListElement text={'Sommerfugl'} />
                <ListElement text={'Hytte'} />
                <ListElement text={'Epletre'} />
            </ul>
            <h4>Poesi</h4>
            <ul>
                <ListElement text={'Lorem ipsum'} />
                <ListElement text={'Lorem ipsum'} />
            </ul>
            <h4>Lys</h4>
            <ul>
                <ListElement text={'Alt. 1'} />
                <ListElement text={'Alt. 2'} />
            </ul>

        </div>
    )
}