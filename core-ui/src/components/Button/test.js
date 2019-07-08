//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

//-----------  Definitions  -----------//

const component = shallow(<Button />);

//-----------  Tests  -----------//

describe('<Button />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
