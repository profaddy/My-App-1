//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import AuthTitle from './index';

//-----------  Definitions  -----------//

const component = shallow(<AuthTitle />);

//-----------  Tests  -----------//

describe('<AuthTitle />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
