//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './index';

//-----------  Definitions  -----------//

const component = shallow(<Avatar />);

//-----------  Tests  -----------//

describe('<Avatar />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
