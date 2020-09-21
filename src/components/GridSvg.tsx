import React from 'react';
import {GalleryContext} from '../context/GalleryContext';
import Rocket from "../assets/SVG/Rocket.svg";
import Thinking from "../assets/SVG/Thinking.svg";
import AnimatedMandala from "../assets/SVG/AnimatedMandala.svg";


/*import Thinking from "../Contents/SVG/Thinking.svg";
import AnimatedMandala from '../Contents/SVG/AniatedMandala.svg';*/


// må alt innhold ligge i src mtp context?

const Svg = () => {
    const {imgProvider} = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState(Rocket);
    React.useEffect( () => {
        if (imgProvider) {
            switch (imgProvider.imgUrl) {
                case '../assets/SVG/Rocket.svg':
                    setData(Rocket);
                    break;
                case "../assets/SVG/Thinking.svg":
                    setData(Thinking);
                    break;
                case "../assets/SVG/AnimatedMandala.svg":
                    setData(AnimatedMandala);
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
