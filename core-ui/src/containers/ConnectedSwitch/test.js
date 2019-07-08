//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import ConnectedSwitch from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <ConnectedSwitch />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<ConnectedSwitch />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
