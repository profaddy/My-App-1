//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import appStore from 'models/store';

import SetPasswordRoute from './index';

//-----------  Definitions  -----------//

const url = '/';

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <SetPasswordRoute />
    </MemoryRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<SetPasswordRoute />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
