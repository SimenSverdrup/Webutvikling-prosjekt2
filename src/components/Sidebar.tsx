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
                <li>Sommerfugl</li>
                <li>Hytte</li>
                <li>Epletre</li>
            </ul>
            <h4>Poesi</h4>
            <ul>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
            </ul>
            <h4>Lys</h4>
            <ul>
                <li>Alt. 1</li>
                <li>Alt. 2</li>
            </ul>

        </div>
    )
}