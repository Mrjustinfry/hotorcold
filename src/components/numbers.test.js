import React from 'react';
import { shallow } from 'enzyme';

import Numbers from './numbers';

describe('<Numbers />', () => {
	it('Should render without crashing', () => {
		shallow(<Numbers userInputs={[]} />);
	})
})