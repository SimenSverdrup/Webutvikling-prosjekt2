import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from '../components/Sidebar/Sidebar';
import GalleryContextProvider from "../context/GalleryContext";


it('renders sidebar correctly ', () => {
    const tree = renderer.create(
        <GalleryContextProvider>
        <Sidebar />
        </GalleryContextProvider>).toJSON();
    expect(tree).toMatchSnapshot();
});

