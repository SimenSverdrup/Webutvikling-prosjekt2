import './Poetry.css';
import React from "react";

let downson = 'https://poetrydb.org/author/Ernest Dowson/lines.json';
let shelley = 'https://poetrydb.org/title/Ozymandias/lines.json';
let shakespeare = 'https://poetrydb.org/author/Shakespeare/lines.json';
let url = '';

interface IState {
    data : [];
}

class Poetry extends React.Component<string, IState> {
    constructor(props : string) {
        super(props)
        this.state = {
            data : [],
        };
    }

    // TODO: logikk for å bytte url her
    url = downson;

    componentDidMount() {
        this.fetchPoetry(url)
    }

    fetchPoetry(url : string) {
        fetch(url)
            .then((response) => response.json())
            .then((poem) => {
                this.setState({ data : poem[0].lines });
            });
        console.log(this.state.data);
    }

    render() {
        return(
            <div>
                {this.state.data?.map((item) => <p key={item}> {item} </p>) ?? ['empty']}
            </div>
        );
    }
}

export default Poetry;