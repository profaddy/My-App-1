//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Modal from './index';

//-----------  Definitions  -----------//

const component = shallow(<Modal />);

//-----------  Tests  -----------//

describe('<Modal />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
