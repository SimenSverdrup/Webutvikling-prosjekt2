import React, { useState, useMemo } from 'react';

// dette er liksom det som denne siden/contexten tar inn. Det er liksom bare som variablene
// øverst i en java-fil
interface GalleryContextProps {
    imgProvider: ImgProvider;
    soundProvider: SoundProvider
    poemProvider: PoemProvider
}

interface ImgProvider {
    imgUrl: string;
    setImgUrl: (val: string) => void;
}

interface SoundProvider {
    soundUrl: string;  // dette sier bare hvilken type det er
    setSoundUrl: (val: string) => void; // dette er en funksjon
}

interface PoemProvider {
    poemUrl: string;
    setPoemUrl: (val: string) => void;
}

export const GalleryContext = React.createContext<GalleryContextProps | null>(null);

export const GalleryStateProvider: React.FC = ( { children }) => {
    // Det er her de globale verdiene blir lagret
    const [imgUrl, setImgUrl] = useState('');
    const [soundUrl, setSoundUrl] = useState('');
    const [poemUrl, setPoemUrl] = useState('');

    const imgProvider = useMemo(() => ( {imgUrl, setImgUrl}), [
        imgUrl, setImgUrl
    ]);

    const soundProvider = useMemo(() => ( {soundUrl, setSoundUrl}), [
        soundUrl, setSoundUrl
    ]);

    const poemProvider = useMemo(() => ( {poemUrl, setPoemUrl}), [
        poemUrl, setPoemUrl
    ]);

    return (
        <GalleryContext.Provider value={{ imgProvider, soundProvider, poemProvider}}>
            {children}
        </GalleryContext.Provider>
    )
}

export default GalleryStateProvider;