//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import CategoryTabs from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <CategoryTabs />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<CategoryTabs />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
