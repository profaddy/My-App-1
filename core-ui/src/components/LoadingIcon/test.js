//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import LoadingIcon from './index';

//-----------  Definitions  -----------//

const component = shallow(<LoadingIcon />);

//-----------  Tests  -----------//

describe('<LoadingIcon />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
