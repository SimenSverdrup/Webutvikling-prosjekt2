import React from 'react';

/*
interface Props {
    audio: string;
}
*/

enum Sound {
    Canon,
    Boo,
    Applause
}

class Music extends React.Component {
    state = {
        play: false,
        sound: Sound.Canon
    }

    canonPath = require("../assets/Canon.mp3");
    applausePath = require("../assets/applause6.mp3");
    booPath = require("../assets/applause6.mp3");

    path = this.applausePath;

    componentDidMount() {
        switch(this.state.sound) {
            case Sound.Canon:
                this.path = this.canonPath;
                break;
            case Sound.Applause:
                this.path = this.applausePath;
                break;
            case Sound.Boo:
                this.path = this.booPath;
                break;
        }
        console.log(this.path);
    }


    render() {
        return (
            <div id="grid_sound">
                <audio controls>
                    <source src={this.path} type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        );
    }
}

export default Music;