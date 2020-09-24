import React from 'react';
import {GalleryContext} from '../../context/GalleryContext';
import Rocket from "../../assets/SVG/Rocket.svg";
import Thinking from "../../assets/SVG/Thinking.svg";
import AnimatedMandala from "../../assets/SVG/AnimatedMandala.svg";
import './GridSvg.css';


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

