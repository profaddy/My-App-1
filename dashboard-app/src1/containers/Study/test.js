//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import Study from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <Study />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<Study />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
