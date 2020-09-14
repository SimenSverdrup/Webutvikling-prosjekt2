import React, { useState, useMemo } from 'react';

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
    soundUrl: string;
    setSoundUrl: (val: string) => void;
}

interface PoemProvider {
    poemUrl: string;
    setPoemUrl: (val: string) => void;
}

export const GalleryContext = React.createContext<GalleryContextProps | null>(null);

export const GalleryStateProvider: React.FC = ( { children }) => {
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