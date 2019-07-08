//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import SignInForm from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <SignInForm />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<SignInForm />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});