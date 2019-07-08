//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import SelectorWrapper from './index';

//-----------  Definitions  -----------//

const component = shallow(<SelectorWrapper />);

//-----------  Tests  -----------//

describe('<SelectorWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
