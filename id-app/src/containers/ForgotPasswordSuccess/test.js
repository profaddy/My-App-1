//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import appStore from 'models/store';

import ForgotPasswordSuccess from './index';

//-----------  Definitions  -----------//

const url = '/';

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <ForgotPasswordSuccess />
    </MemoryRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<ForgotPasswordSuccess />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
