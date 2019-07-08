//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import SidebarWrapper from './index';

//-----------  Definitions  -----------//

const component = shallow(<SidebarWrapper />);

//-----------  Tests  -----------//

describe('<SidebarWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
