//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import ErrorBlock from './index';

//-----------  Definitions  -----------//

const component = shallow(<ErrorBlock />);

//-----------  Tests  -----------//

describe('<ErrorBlock />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
