//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import Logo from './index';

//-----------  Definitions  -----------//

const component = shallow(<Logo width={18} />);

//-----------  Tests  -----------//

describe('<Logo />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
