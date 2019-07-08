//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import Tabs from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <Tabs />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<Tabs />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
