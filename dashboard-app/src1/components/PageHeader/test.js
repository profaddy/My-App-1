//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import PageHeader from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <PageHeader />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<PageHeader />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
