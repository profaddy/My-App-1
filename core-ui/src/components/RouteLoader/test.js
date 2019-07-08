//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import RouteLoader from './index';

//-----------  Definitions  -----------//

const component = shallow(<RouteLoader />);

//-----------  Tests  -----------//

describe('<RouteLoader />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });
});
