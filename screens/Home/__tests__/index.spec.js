import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../index';

jest.mock('<SafeAreaView>', ());

describe('Screens -> Home', () => {
    it('should be match with snapshot generated', async () => {
        const element = renderer.create(<Home />).toJSON();
        expect(element).toMatchSnapshot();
    });
});