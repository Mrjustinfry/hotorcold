import React from 'react';
import { shallow } from 'enzyme';

import GuessBox from './guessBox';

describe('<GuessBox />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessBox />);
	})
})