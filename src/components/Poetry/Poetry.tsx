import './Poetry.css';
import * as React from "react";
import { GalleryContext } from '../../context/GalleryContext';


const Poetry = () => {
    const { poemProvider }  = React.useContext(GalleryContext)!;
    const [data, setData ] = React.useState("Select an author to display beautiful poetry");

    React.useEffect( () => {
        fetch(poemProvider.poemUrl)
            .then(response => {
                return response.json();
            })
            .then(
                (json) => {
                    // Endre tall i slice for å få med flere linjer i diktet
                    setData(json[0].lines?.slice(0, 7).join("\n"))
                }).catch(err => {
                    console.log(err);
                    setData("Unable to fetch poetry.");
        });
    },[poemProvider])

    return(<div id="poem">
            {data}
            </div>
    )
}


export default Poetry;

