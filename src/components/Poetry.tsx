import './Poetry.css';
import * as React from "react";
import {useEffect} from "react";
import { GalleryContext } from '../context/GalleryContext';


const Poetry = () => {
    const {poemProvider} = React.useContext(GalleryContext)!;
    const [data, setData] = React.useState(localStorage.getItem("poetry") || "Select an author to display beautiful poetry");

    useEffect( () => {
        fetch(poemProvider.poemUrl)
            .then(response => {
                return response.json();
            })
            .then(
                (json) => {
                    // Endre tall i slice for å få med flere linjer i diktet
                    setData(json[0].lines?.slice(0, 10).join("\n"));

                    // Lagre state i sessionStorage
                    window.sessionStorage.removeItem("poetry");
                    window.sessionStorage.setItem("poetry", data);
                })
            .catch(
                (error) => {
                    console.log(error);
                    setData(String(sessionStorage.getItem("poetry")));
                });
    },[poemProvider, data])

    useEffect( () => {
        // Lagre state i sessionStorage
        setData(String(sessionStorage.getItem("poetry")) || "Select an author to display beautiful poetry");
    }, [data])

    return(<div id="poem">
            {data}
            </div>
    )
}


export default Poetry;

