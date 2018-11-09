import React from 'react';
import { shallow } from 'enzyme';

import GuessInput from './guessInput';

describe('<GuessInput />', () => {
	it('Should render without crashing', () => {
		shallow(<GuessInput />);
	})
})