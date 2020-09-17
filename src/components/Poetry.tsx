import './Poetry.css';
import * as React from "react";
import { GalleryContext } from '../context/GalleryContext';
import { threadId } from 'worker_threads';

let downson = 'https://poetrydb.org/author/Ernest%20Dowson/lines.json';
let shelley = 'https://poetrydb.org/title/Ozymandias/lines.json';
let shakespeare = 'https://poetrydb.org/author/Shakespeare/lines.json';


interface IState {
    data : [{lines: [string]}];
    isLoaded : boolean,
    url : any
}

/*
class Poetry extends React.Component<any, IState> {
    static contextType = GalleryContext;
    context!: React.ContextType<typeof GalleryContext>;

    constructor(props : any) {
        super(props)
        this.state = {
            data : [{lines: [""]}],
            isLoaded : false,
            url: ""
        };
    }
    



    componentDidMount() {
        
        fetch(this.state.url)
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
        const {poemUrl,setPoemUrl } = this.context.poemProvider!;
        console.log(url)
        this.setState({url: this.context.poemProvider.poemUrl })
        // Endre tall i slice for å få med flere linjer i diktet
        return(
            <div id="poem">
                {console.log(this.state.url)}
                {this.state.data[0].lines?.slice(0, 7).map((line, index) => <p key={index}>{ line }</p>) ?? ["Empty"]}
            </div>
        );
    }
}*/


const Poetry = () => {
    const { poemProvider }  = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState(null);

    React.useEffect( () => {
        fetch(poemProvider.poemUrl)
            .then(response => {
                return response.json();
            })
            .then(
                (json) => {
                    setData(json[0].lines?.slice(0, 7).join("\n"))
                },
                () => {
                    console.log("fail")
                }
                );
    },[poemProvider])
    return<div id="poem">
        {data}
        </div>
}


export default Poetry;

