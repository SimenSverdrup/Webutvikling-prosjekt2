import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from '../Sidebar';

it('renders correctly when there are no assets', () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot();
});

/*
it('renders correctly when there is one single asset', () => {
    const assets = ['one'];
    const tree = renderer.create(<Listelements assets={assets} />).toJSON();
    expect(tree).toMatchSnapshot();
});



it('renders correctly when there are multiple assets', () => {
    const assets = ['one', 'two', 'three'];
    const tree = renderer.create(<Listelements assets={assets} />).toJSON();
    expect(tree).toMatchSnapshot();
});
*/
