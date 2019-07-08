//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import FieldError from './index';

//-----------  Definitions  -----------//

const component = shallow(<FieldError />);

//-----------  Tests  -----------//

describe('<FieldError />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
