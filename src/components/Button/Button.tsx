import React from 'react';
import { GalleryContext } from '../../context/GalleryContext';


interface Props {
    text: string;
    id: string;
}

interface State {
    poetry: string,
    music: string,
    svg: string,
}

// Bruker class istedenfor function grunnet krav om bruk av klasse
class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            poetry: "",
            music: "",
            svg: "",
        };
    }

    static contextType = GalleryContext;

    onClick() {
        if (this.props.id === "saveBut") {
            this.handleSave();
        }
        else if (this.props.id === "loadBut") {
            this.handleLoad();
        }
    }

    handleSave() {
        // Lagre states i local storage
        localStorage.setItem("poetry", String(sessionStorage.getItem("poetry")));
        localStorage.setItem("music", String(sessionStorage.getItem("music")));
        localStorage.setItem("svg", String(sessionStorage.getItem("svg")));
    }

    handleLoad() {
        let poetry = localStorage.getItem("poetry");
        let music = localStorage.getItem("music");
        let svg = localStorage.getItem("svg");

        // Lagre state i sessionStorage - dermed fikser logikken i poetry, music og svg oppdatering automatisk
        window.sessionStorage.removeItem("poetry");
        window.sessionStorage.setItem("poetry", String(poetry));

        window.sessionStorage.removeItem("music");
        window.sessionStorage.setItem("music", String(music));

        window.sessionStorage.removeItem("svg");
        window.sessionStorage.setItem("svg", String(svg));

        this.setState({
            poetry: String(poetry),
            music: String(music),
            svg: String(svg),
        })
        window.location.reload();
    }

    render () {
        return(
            <div>
                <button id={this.props.id} onClick={this.onClick.bind(this)}> {this.props.text} </button>
            </div>
        );
    }


}


export default Button;