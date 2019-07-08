//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import Reviews from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <Reviews />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<Reviews />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
