//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import LoadingBlock from './index';

//-----------  Definitions  -----------//

const component = shallow(<LoadingBlock />);

//-----------  Tests  -----------//

describe('<LoadingBlock />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
