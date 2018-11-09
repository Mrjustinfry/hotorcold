import React from 'react';
import { shallow } from 'enzyme';

import GuessOutput from './guessOutput';

describe('<GuessOutput />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessOutput />);
	})
})