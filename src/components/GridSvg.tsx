import React from 'react';
import {GalleryContext} from '../context/GalleryContext';
import Rocket from "/public/Contents/SVG/Rocket.svg";
import Thinking from "/public/Contents/SVG/Thinking.svg";
import AnimatedMandala from '/public/Contents/SVG/AniatedMandala.svg';




const Svg = () => {
    const {imgProvider} = React.useContext(GalleryContext);
    const [data, setData ] = React.useState(Rocket);
    React.useEffect( () => {
        if (imgProvider) {
            switch (imgProvider.imgUrl) {
                case 'Rocket.svg':
                    setData(Rocket);
                    break;
                case 'AnimatedMandala.svg':
                    setData(AnimatedMandala);
                    break;
                case 'Thinking.svg':
                    setData(Thinking);
                    break;
            }
        }
    }, [imgProvider])

    return(<div id="grid_svg">
        <img src={data} />
    </div>);
}

export default Svg;



/*export default function GridSvg() {
    return (
        <div id="grid_svg">

            <img src={process.env.PUBLIC_URL + 'Contents/SVG/9va-rocket-blue-and-red.svg'} />
        </div>
    )
}

*/
