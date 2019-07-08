//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Styleguide from './index';

//-----------  Definitions  -----------//

const component = shallow(<Styleguide />);

//-----------  Tests  -----------//

describe('<Styleguide />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
