//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import OrderCard from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <OrderCard />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<OrderCard />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
