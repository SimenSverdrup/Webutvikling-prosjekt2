<<<<<<< HEAD:src/components/GridSvg.tsx
import React, {useEffect} from 'react';
import {GalleryContext} from '../context/GalleryContext';
import Rocket from "../assets/SVG/Rocket.svg";
import Thinking from "../assets/SVG/Thinking.svg";
import AnimatedMandala from "../assets/SVG/AnimatedMandala.svg";
=======
import React from 'react';
import {GalleryContext} from '../../context/GalleryContext';
import Rocket from "../../assets/SVG/Rocket.svg";
import Thinking from "../../assets/SVG/Thinking.svg";
import AnimatedMandala from "../../assets/SVG/AnimatedMandala.svg";
import './GridSvg.css';
>>>>>>> 6c40ccd79f05d647fc00d19d94c6e95b69bedb0d:src/components/GridSvg/GridSvg.tsx


const Svg = () => {
    const {imgProvider} = React.useContext(GalleryContext)!;
    // Hvis lagret state i session storage. bruk denne - hvis ikke, bruk Rocket
    const [data, setData ] = React.useState((sessionStorage.getItem("svg")) ? sessionStorage.getItem("svg") : Rocket);

    useEffect( () => {
        switch (imgProvider.imgUrl) {
            case '../assets/SVG/Rocket.svg':
                setData(Rocket);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", String(data));
                break;
            case "../assets/SVG/Thinking.svg":
                setData(Thinking);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", String(data));
                break;
            case "../assets/SVG/AnimatedMandala.svg":
                setData(AnimatedMandala);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", String(data));
                break;
        }
    }, [imgProvider, data])

    return(<div id="grid_svg">
        <img src={String(data)} />
    </div>);
}

export default Svg;

