import React, {useEffect} from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Canon from '../assets/Canon.mp3';
import Boo from '../assets/boohiss.mp3';
import Applause from '../assets/applause6.mp3';


const Music = () => {
    const { soundProvider }  = React.useContext(GalleryContext)!;
    // Hvis lagret state i session storage. bruk denne - hvis ikke, bruk Canon
    const [data, setData ] = React.useState((sessionStorage.getItem("music")) ?
        sessionStorage.getItem("music") : Canon);

    useEffect( () => {
        switch (soundProvider.soundUrl) {
            case 'Canon':
                setData(Canon);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", String(data));
                break;
            case 'Applause':
                setData(Applause);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", String(data));
                break;
            case 'Boo':
                setData(Boo);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("music");
                window.sessionStorage.setItem("music", String(data));
                break;
        }
    }, [soundProvider.soundUrl, data])

    return(<div id="grid_sound">
        <audio src={String(data)} controls>
        </audio>
    </div>);
}


export default Music;