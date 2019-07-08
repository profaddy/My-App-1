//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import StrongPassword from './index';

//-----------  Definitions  -----------//

const component = shallow(<StrongPassword />);

//-----------  Tests  -----------//

describe('<StrongPassword />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
