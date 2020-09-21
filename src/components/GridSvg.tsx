import React from 'react';
import { GalleryContext } from '../context/GalleryContext';
import Rocket from "/public/Contents/SVG";
import Thinking from "/public/Contents/SVG";
import AnimatedMandala.svg from 'public/Contents/SVG';




const Svg = () => {
    const {ImgProvider} = React.useContext(GalleryContext);
    const [data, setData ] = React.useState(Rocket.svg);
    React.useEffect( () => {
        if (ImgProvider) {
            switch (ImgProvider.imgUrl) {
                case 'Rocket.svg':
                    setData(Rocket.svg);
                    break;
                case 'AnimatedMandala.svg':
                    setData(AnimatedMandala.svg);
                    break;
                case 'Thinking.svg':
                    setData(Thinking.svg);
                    break;
            }
        }
    }, [ImgProvider])

    return(<div id="grid_svg">
        <img src={process.env.PUBLIC_URL + 'Contents/SVG/9va-rocket-blue-and-red.svg'} />
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
