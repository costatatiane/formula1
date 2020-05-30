import React from 'react';
import { renderer } from '@testing-library/react-native';

import HeaderAndroid from '../index';

test('should be generate snapshot', () => {
    const element = renderer.create(<HeaderAndroid />).toJSON();
    expect(element).toMatchSnapshot();
})