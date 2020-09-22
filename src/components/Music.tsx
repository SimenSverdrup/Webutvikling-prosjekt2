import React, {useEffect} from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Canon from '../assets/Canon.mp3';
import Boo from '../assets/boohiss.mp3';
import Applause from '../assets/applause6.mp3';


const Music = () => {
    const { soundProvider }  = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState(localStorage.getItem("music") || Canon);

    React.useEffect( () => {
        setData(String(sessionStorage.getItem("music")) || Canon);

        switch (soundProvider.soundUrl) {
            case 'Canon':
                setData(Canon);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", data);
                break;
            case 'Applause':
                setData(Applause);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", data);
                break;
            case 'Boo':
                setData(Boo);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", data);
                break;
        }
    }, [soundProvider, data])

    useEffect( () => {
        // Lagre state i sessionStorage
        setData(String(sessionStorage.getItem("music")));
    }, [data])

    return(<div id="grid_sound">
        <audio src={data} controls>
        </audio>
    </div>);
}


export default Music;