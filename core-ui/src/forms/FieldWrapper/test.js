//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import FieldWrapper from './index';

//-----------  Definitions  -----------//

const component = shallow(<FieldWrapper />);

//-----------  Tests  -----------//

describe('<FieldWrapper />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
