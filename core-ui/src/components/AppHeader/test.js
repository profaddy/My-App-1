//-----------  Imports  -----------//

import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from './index';

//-----------  Definitions  -----------//

const component = shallow(
  <AppHeader>
    <h1>Hello!</h1>
  </AppHeader>,
);

//-----------  Tests  -----------//

describe('<AppHeader />', () => {
  it('Renders', () => {
    expect(component.length).toBe(1);
  });

  it('render children', () => {
    expect(component.find('h1').text()).toBe('Hello!');
  });
});
