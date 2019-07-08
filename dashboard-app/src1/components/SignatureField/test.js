//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import SignatureField from './index';

//-----------  Definitions  -----------//

const component = shallow(<SignatureField />);

//-----------  Tests  -----------//

describe('<SignatureField />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
