//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import InlineDateField from './index';

//-----------  Definitions  -----------//

const component = shallow(<InlineDateField />);

//-----------  Tests  -----------//

describe('<InlineDateField />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
