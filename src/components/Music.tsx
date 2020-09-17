import React from 'react';
import { GalleryContext } from '../context/GalleryContext';


const Music = () => {
    const { soundProvider }  = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState("../assets/Canon.mp3");

    React.useEffect( () => {
        setData(soundProvider.soundUrl);
        console.log(data);
    },[soundProvider])

    return(<div id="grid_sound">
        <audio controls>
            <source src={data} type="audio/mp3"/>
            Your browser does not support the audio element.
        </audio>
    </div>);
}


export default Music;