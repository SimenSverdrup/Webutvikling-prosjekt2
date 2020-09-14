import './Poetry.css';
import React from "react";

let downson = 'https://poetrydb.org/author/Ernest%20Dowson/lines.json';
let shelley = 'https://poetrydb.org/title/Ozymandias/lines.json';
let shakespeare = 'https://poetrydb.org/author/Shakespeare/lines.json';
let url = '';

enum Poet {
    Shakespeare,
    Shelley,
    Downson
}

interface IState {
    data : [{lines: [string]}];
    isLoaded : boolean,
    poet : Poet
}

class Poetry extends React.Component<any, IState> {
    constructor(props : any) {
        super(props)
        this.state = {
            data : [{lines: [""]}],
            isLoaded : false,
            poet : Poet.Shakespeare
        };
    }

    url = shakespeare;

    componentDidMount() {
        // Logikk for å bytte url, avhengig av hvilken poet som er valgt
        switch (this.state.poet) {
            case Poet.Shakespeare:
                this.url = shakespeare;
                break;
            case Poet.Downson:
                this.url = downson;
                break;
            case Poet.Shelley:
                this.url = shelley;
                break;
            default:
                this.url = shakespeare;
                break;
        }

        fetch(this.url)
            .then(response => {
                return response.json();
            })
            .then(
                (json) => {
                    this.setState({ data : json, isLoaded : true})
                },
                () => {
                    this.setState({data : [{lines: ["An error occured while fetching poetry"]}], isLoaded : true})
                }
                );
    }

    render() {
        // Endre tall i slice for å få med flere linjer i diktet
        return(
            <div id="poem">
                {this.state.data[0].lines?.slice(0, 7).map((line, index) => <p key={index}>{ line }</p>) ?? ["Empty"]}
            </div>
        );
    }
}

export default Poetry;

