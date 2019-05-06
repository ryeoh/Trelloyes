import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List key='1' header='First list' cards={[]} />)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});
