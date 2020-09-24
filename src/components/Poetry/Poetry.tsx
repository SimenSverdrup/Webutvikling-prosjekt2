import './Poetry.css';
import * as React from "react";
<<<<<<< HEAD:src/components/Poetry.tsx
import {useEffect} from "react";
import { GalleryContext } from '../context/GalleryContext';
=======
import { GalleryContext } from '../../context/GalleryContext';
>>>>>>> 6c40ccd79f05d647fc00d19d94c6e95b69bedb0d:src/components/Poetry/Poetry.tsx

const Poetry = () => {
    const {poemProvider} = React.useContext(GalleryContext)!;
    // Hvis lagret state i session storage. bruk denne - hvis ikke, bruk introstring
    const [data, setData] = React.useState(
        (sessionStorage.getItem("poetry")) ?
            sessionStorage.getItem("poetry") : "Select an author to display beautiful poetry \n(might take a few seconds to load)");

    useEffect( () => {
        fetch(poemProvider.poemUrl)
            .then(response => {
                return response.json();
            })
            .then(
                (json) => {
                    // Endre tall i slice for å få med flere linjer i diktet
                    setData(json[0].lines?.slice(0, 10).join("\n"));

                    console.log("Successful fetch: " + data);

                    // Lagre state i sessionStorage
                    window.sessionStorage.removeItem("poetry");
                    window.sessionStorage.setItem("poetry", String(data));
                })
            .catch(
                (error) => {
                    console.log("Error: " + error);
                });
    },[poemProvider, data])

    return(<div id="poem">
            {data}
            </div>
    )
}


export default Poetry;

