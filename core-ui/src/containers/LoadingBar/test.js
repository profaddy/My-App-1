//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import LoadingBar from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <LoadingBar />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<LoadingBar />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});

//-----------  Cleanup  -----------//

container.unmount();
