//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import appStore from 'models/store';

import SignupSuccess from './index';

//-----------  Definitions  -----------//

const url = '/';

const container = mount(
  <Provider store={appStore}>
    <MemoryRouter initialEntries={[url]}>
      <SignupSuccess />
    </MemoryRouter>
  </Provider>,
);

//-----------  Tests  -----------//

describe('<SignupSuccess />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
