//-----------  Imports  -----------//

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import appStore from 'models/store';

import ReviewConsent from './index';

//-----------  Definitions  -----------//

const container = mount(
  <Provider store={appStore}>
    <ReviewConsent />
  </Provider>,
);

//-----------  Tests  -----------//

describe('<ReviewConsent />', () => {
  it('Renders', () => {
    expect(container.length).toBe(1);
  });
});
