//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import appStore from 'models/store';

import EmailVerification from './index';

//-----------  Definitions  -----------//

const url = '/';

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <EmailVerification />
    </MemoryRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<EmailVerification />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
