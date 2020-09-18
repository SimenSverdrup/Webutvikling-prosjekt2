import React from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Canon from '../assets/Canon.mp3';
import Boo from '../assets/boohiss.mp3';
import Applause from '../assets/applause6.mp3';


const Music = () => {
    const { soundProvider }  = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState(Canon);

    React.useEffect( () => {
        if (soundProvider) {
            switch (soundProvider.soundUrl) {
                case 'Canon':
                    setData(Canon);
                    break;
                case 'Applause':
                    setData(Applause);
                    break;
                case 'Boo':
                    setData(Boo);
                    break;
            }
        }
    }, [soundProvider])

    return(<div id="grid_sound">
        <audio src={data} controls>
        </audio>
    </div>);
}


export default Music;