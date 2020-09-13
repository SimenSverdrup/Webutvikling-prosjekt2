import React from 'react';
import GridSvg from './GridSvg';
import GridPoem from './GridPoem';
import GridSound from './GridSound';
import GridFaviourite from './GridFaviourite';
import GridSidebar from './GridSidebar';

export default function GridContainer() {
    return (
    
    <div id="grid_container">

        <GridSvg />
        <GridPoem />
        <GridSound />
        <GridFaviourite />
        <GridSidebar />
    
    </div>)
}
