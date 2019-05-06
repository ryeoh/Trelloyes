import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card key="a" title='First card' content='lorem ipsum' />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});