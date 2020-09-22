import React, {useEffect} from 'react';
import {GalleryContext} from '../context/GalleryContext';
import Rocket from "../assets/SVG/Rocket.svg";
import Thinking from "../assets/SVG/Thinking.svg";
import AnimatedMandala from "../assets/SVG/AnimatedMandala.svg";


const Svg = () => {
    const {imgProvider} = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState(localStorage.getItem("svg") || Rocket);

    React.useEffect( () => {
        switch (imgProvider.imgUrl) {
            case '../assets/SVG/Rocket.svg':
                setData(Rocket);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", data);
                break;
            case "../assets/SVG/Thinking.svg":
                setData(Thinking);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", data);
                break;
            case "../assets/SVG/AnimatedMandala.svg":
                setData(AnimatedMandala);
                // Lagre state i sessionStorage
                window.sessionStorage.removeItem("svg");
                window.sessionStorage.setItem("svg", data);
                break;
        }
    }, [imgProvider, data])

    useEffect( () => {
        // Lagre state i sessionStorage
        setData(String(sessionStorage.getItem("svg")));
    }, [data])

    return(<div id="grid_svg">
        <img src={data} />
    </div>);
}

export default Svg;

